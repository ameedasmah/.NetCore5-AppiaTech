using Contract.Entities;
using Contract.models;
using Contract.Resourse;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.mangers
{
    //Publisher Interface
    interface IManger
    {
        Task<IEnumerable<PublisherResourse>> GetPublishers();
        Task<Publisher> GetPublisher(int id);
        Task<PublisherResourse> CreatePublisher(PublisherModel newPublisherModel);
        Task<PublisherResourse> PutPublisher(int id, PublisherModel model);
        Task DeleteResource(int Id);
    }
}
