using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Entities;

namespace WebApplication1.Repositories
{
    public class AuthorRepositories:IAuthorRepositories
    {
        private readonly BookContext _bookContext;

        public AuthorRepositories(BookContext bookContext)
        {
            _bookContext = bookContext;
        }

        public async Task<Author> CreateAuthor(Author author)
        {
            if (author == null)
            {
                throw new ArgumentNullException($"{nameof(CreateAuthor)} entity musn't to be null ");
            }
            try
            {
                _bookContext.Authors.Add(author);
                await _bookContext.SaveChangesAsync();
                return author;
            }
            catch(Exception exiption)
            {
                throw new Exception($"Author will Not Create : {exiption.Message}");
            }
            
        }

        public async Task Delete(int Id)
        {
            var BookToDelelte = await _bookContext.Authors.FirstOrDefaultAsync(x => x.Id == Id);
            _bookContext.Remove(BookToDelelte);
            await _bookContext.SaveChangesAsync();
        }

        public async Task<Author> GetAuthor(int Id)
        {
            return await _bookContext.Authors.Include(x => x.Books).FirstOrDefaultAsync(X => X.Id == Id);
        }

        public async Task<ICollection<Author>> GetAuthors(Func<Author, bool> predicate)
        {
            if (predicate != null) {
                return _bookContext.Authors.Include(x => x.Books).Where(predicate).ToList();
            }
            return await _bookContext.Authors.Include(x => x.Books).ToListAsync();
        }

        public async Task Update(Author author)
        {

            if (author == null)
            {
                throw new ArgumentNullException($"{nameof(Update)} entity mustNn't to be null");
            }
            try
            {
            _bookContext.Entry(author).State = EntityState.Modified;
            await _bookContext.SaveChangesAsync();

            }
            catch (Exception exiption)
            {
                throw new Exception($"Author will Not Create : {exiption.Message}");
            };
        }
    }
}
