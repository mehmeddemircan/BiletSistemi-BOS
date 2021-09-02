using BOS.Core;
using BOS.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BOS.DataAccess.Contexts
{
    public  class UserDbContext : IdentityDbContext<AppUser> , IDbContext
    {


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Server=127.0.0.1;Port=5432;Database=BOS;User Id=postgres;Password=Sd635241;");
        }



    }
}
