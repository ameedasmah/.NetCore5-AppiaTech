﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data;
using WebApplication1.Entities;
using WebApplication1.Resourse;

namespace WebApplication1.Helper
{
    public static class Extinsion
    {
        public static BookResourse ToResource(this Book entitiy)
        {
            return new BookResourse()
            {
                Id = entitiy.Id,
                PublisherId = entitiy.PublisherId,
                Title = entitiy.Title,
                discraptions = entitiy.Discraptions,
                publisher = entitiy.Publisher
            };
        }

        public static BookLightResource ToLightResource(this Book entitiy)
        {
            return new BookLightResource()
            {
                Id = entitiy.Id,
                Title = entitiy.Title,
                discraptions = entitiy.Discraptions
            };
        }


        public static PublisherResourse ToResource(this Publisher entities)
        {
            return new PublisherResourse()
            {
                Id = entities.Id,
                Name = entities.Name,
                Books = entities.Books.Select(x => x.ToLightResource()).ToList()
            };
        }

        public static BookPublisherResource ToResourceNew(this Book entitiy)
        {
            return new BookPublisherResource()
            {
                Id = entitiy.Id,
                Title = entitiy.Title,
                Discraptions = entitiy.Discraptions,
                PublisherId = entitiy.PublisherId,
                Newpublisher = entitiy.Publisher.ToResourceNew(),
                BookAuthorResources = entitiy.Authors.Select(x => x.ToResourceNew()).ToList()

            };
        }

        public static BookAuthorResource ToResourceNew(this Author entitiy)
        {
            return new BookAuthorResource()
            {
                Id = entitiy.Id,
                FullName = entitiy.FullName
            };
        }

        public static PublisherBookResourse ToResourceNew(this Publisher entities)
        {
            return new PublisherBookResourse()
            {
                Id = entities.Id,
                Name = entities.Name,
            };
        }

        public static AuthorResource ToResource(this Author entitiy)
        {
            return new AuthorResource()
            {
                Id = entitiy.Id,
                FullName = entitiy.FullName,
                Email = entitiy.Email,
                Age = entitiy.Age,
                Books = entitiy.Books.Select(x => x.ToResourceNEw()).ToList()
        };
    }

    public static AuthorBookResource ToResourceNEw(this Book entitiy)
        {
            return new AuthorBookResource()
            {
                Id = entitiy.Id,
                Title = entitiy.Title,
                Discraptions = entitiy.Discraptions
            };
        }

    }
}


