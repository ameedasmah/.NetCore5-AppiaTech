using Contract.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DataAccessLayer.Repositories
{
   public interface IAuthorRepositories
    {
         Task<ICollection<Author>> GetAuthors(Func<Author, bool> predicate = null);
         Task<Author> GetAuthor(int Id);
         Task<Author> CreateAuthor(Author author);
         Task<Author> Update(Author author);
        Task Delete(int Id);


    }
}
