﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data;

namespace WebApplication1.Resourse
{
    public class AuthorBookCreateResource
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public int Age { get; set; }
     
    }
}
