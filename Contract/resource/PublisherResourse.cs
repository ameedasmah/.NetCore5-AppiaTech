using System.Collections.Generic;

namespace Contract.Resourse
{
    public class PublisherResourse
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<PublisherBookCreate> Books { get; set; }
    }
}
