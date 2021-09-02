using BOS.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BOS.Business.Abstract
{
     public interface IBranchService
    {


        Task<List<Branch>> GetAllAsync();

        Task<Branch> GetByIdAsync(int id);

        Task<Branch> AddAsync(Branch branch);

        Task UpdateAsync(int id , Branch branch);

        Task DeleteAsync(int id );
    }
}
