using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Entities;
using WebApplication1.Resourse;

namespace WebApplication1.Data
{
    public class BookResourse
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string discraptions { get; set; }
        public int PublisherId { get; set; }
        public Publisher publisher { get; set; }
        public List<BookAuthorResource> AuthoursNameList { get; set; }

    }
}
