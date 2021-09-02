using BOS.Entities.Common;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BOS.Entities
{
    public class AppUser : IdentityUser
    {


        public int FirstName { get; set; }

        public string LastName { get; set; }

        public string FullName { get { return FirstName + ' ' + LastName;  }  }

        public DateTime? DateOfBirth { get; set; }

        public int BranchId { get; set; }

         

    }
}
