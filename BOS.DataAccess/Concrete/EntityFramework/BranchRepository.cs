using BOS.Core.EntityFramework;
using BOS.DataAccess.Abstract;
using BOS.DataAccess.Contexts;
using BOS.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BOS.DataAccess.Concrete.EntityFramework
{
    public class BranchRepository : EfBaseRepository<Branch,ApplicationDbContext>,IBranchRepository
    {


    }
}
