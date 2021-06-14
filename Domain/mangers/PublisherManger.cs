
using Contract.Entities;
using Contract.models;
using Contract.Resourse;
using Microsoft.Azure.Management.ResourceManager.Fluent.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using WebApplication1.Helper;

using WebApplication1.Repositories;


namespace Domain.mangers
{
    public class publishermanger : IManger
    {
        public Task<PublisherResourse> CreatePublisher(PublisherModel newPublisherModel)
        {
            throw new NotImplementedException();
        }

        public Task DeleteResource(int Id)
        {
            throw new NotImplementedException();
        }

        public Task<Publisher> GetPublisher(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<PublisherResourse>> GetPublishers()
        {
            throw new NotImplementedException();
        }

        public Task<PublisherResourse> PutPublisher(int id, PublisherModel model)
        {
            throw new NotImplementedException();
        }
    }
}

