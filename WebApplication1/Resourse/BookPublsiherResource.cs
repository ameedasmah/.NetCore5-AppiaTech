using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Entities;
using WebApplication1.Resourse;


namespace WebApplication1.Data
{
    public class BookPublisherResource
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Discraptions { get; set; }
        public int? PublisherId { get; set; }
        public PublisherBookResourse Newpublisher { get; set; }
        public List<BookAuthorResource> BookAuthorResources { get; set; }
        //public List<Book_AuthorsResourse> book_Authors { get; set; }
    }
}
