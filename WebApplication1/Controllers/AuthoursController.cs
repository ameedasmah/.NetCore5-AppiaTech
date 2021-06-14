using Contract.Entities;
using Contract.models;
using Contract.Resourse;
using DataAccessLayer.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Helper;
using WebApplication1.Repositories;


namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthoursController : ControllerBase
    {
        private readonly IAuthorRepositories _reposotiry;
        private readonly IBookRepository _bookRepository;

        public AuthoursController(IAuthorRepositories reposotiry, IBookRepository bookRepository)
        {
            _reposotiry = reposotiry;
            _bookRepository = bookRepository;

        }
        [HttpGet]
        public async Task<IEnumerable<AuthorResource>> GetAuthors()
        {
            var AuthorEntities = await _reposotiry.GetAuthors();

            var ResponseAuthor = new List<AuthorResource>();

            foreach (var item in AuthorEntities)
            {
                ResponseAuthor.Add(item.ToResource());
            }
            return ResponseAuthor;
        }
        [HttpGet("{id}")]
        public async Task<AuthorResource> GetAuthor(int id)
        {
            var AuthorEntitiy = await _reposotiry.GetAuthor(id);

            return AuthorEntitiy.ToResource();
        }
        [HttpPost]
        public async Task<ActionResult<AuthorResource>> CreateAuthor([FromBody] AuthorModel Entitiy)
        {
            var AuthEntitiy = new Author()
            {
                FullName = Entitiy.FullName,
                Email = Entitiy.Email,
                Age = Entitiy.Age,
            };
            var AuthortOEntities = await _reposotiry.CreateAuthor(AuthEntitiy);
            return CreatedAtAction(nameof(GetAuthor), new { id = AuthortOEntities.Id }, AuthortOEntities.ToResourceNEw());
        }
        [HttpPut("{Id}")]

        public async Task<ActionResult> PutAuthor(int Id, [FromBody] AuthorModel model)
        {
            var existingEntitiy = await _reposotiry.GetAuthor(Id);
            if (existingEntitiy is null) { return NotFound(); }

            existingEntitiy.FullName = model.FullName;
            existingEntitiy.Email = model.Email;
            existingEntitiy.Age = model.Age;

            var UpdateEntitiy = await _reposotiry.Update(existingEntitiy);
            return Ok(UpdateEntitiy.ToResource());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var bookToDelete = await _reposotiry.GetAuthor(id);
            if (bookToDelete == null)
                return NotFound();

            if (bookToDelete.Books.Count == 0)
            {
                await _reposotiry.Delete(bookToDelete.Id);

                return NoContent();
            }
            else
            {
                return BadRequest("can't delete Publisher has Book");
            }
        }
    }
}
