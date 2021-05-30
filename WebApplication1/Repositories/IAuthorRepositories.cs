using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Entities;

namespace WebApplication1.Repositories
{
   public interface IAuthorRepositories
    {
         Task<ICollection<Author>> GetAuthors(Func<Author, bool> predicate = null);
         Task<Author> GetAuthor(int Id);
         Task<Author> CreateAuthor(Author author);
         Task Update(Author author);
        Task Delete(int Id);


    }
}
