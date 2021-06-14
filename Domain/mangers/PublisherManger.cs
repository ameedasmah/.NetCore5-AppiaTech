﻿
using Contract.Entities;
using Contract.models;
using Contract.Resourse;
using Microsoft.AspNetCore.Mvc;
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
    public interface IPublisherManger
    {

        Task<IEnumerable<PublisherResource>> GetPublishers();
        Task<Publisher> GetPublisher(int id);
        Task<PublisherResource> CreatePublisher(PublisherModel newPublisherModel);
        Task<PublisherResource> PutPublisher(int id, PublisherModel model);
        Task DeleteResource(int Id);


    }
    public class publishermanger : IPublisherManger
    {

        private readonly IPublisherRepositories _repository;
        public publishermanger(IPublisherRepositories repository)
        {
            _repository = repository;
        }
        public async Task<PublisherResource> CreatePublisher(PublisherModel newPublisherModel)
        {
            var newPublisherEntity = new Publisher()
            {
                Name = newPublisherModel.Name,
                Email = newPublisherModel.Email,
                DateOfBirth = newPublisherModel.DateOfBirth,
                Salery = newPublisherModel.Salery
            };
            var newPublisherResource = await _repository.CreatePublisher(newPublisherEntity);
            return newPublisherResource.ToResource();
            

        }

        public async Task DeleteResource(int Id)
        {
            var BookToDelete = await _repository.GetPublisher(Id);
            if (BookToDelete == null) throw new Exception("Id not Found");

              await _repository.deletePublisher(BookToDelete.Id);
        }

        public async Task<Publisher> GetPublisher(int id)
        {
            return await _repository.GetPublisher(id);
        }

        public async Task<IEnumerable<PublisherResource>> GetPublishers()
        {
            var PublisherEntities = await _repository.GetPublishers();

            var publisherResource = new List<PublisherResource>();

            foreach (var item in PublisherEntities)
            {
                publisherResource.Add(item.ToResource());
            }
            return publisherResource;
        }

        public async Task<PublisherResource> PutPublisher(int id, PublisherModel model)
        {
            var existingEntity = await _repository.GetPublisher(id);
            if (existingEntity == null) throw new Exception("Id not Found");

            existingEntity.Name = model.Name;
            var updatedEntity = await _repository.updatePublisher(existingEntity);
            return updatedEntity.ToResource();
        }

 
    }
}

