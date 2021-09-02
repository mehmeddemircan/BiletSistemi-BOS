using BOS.Business.Abstract;
using BOS.DataAccess.Abstract;
using BOS.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BOS.Business.Concrete
{
    public class BranchManager : IBranchService
    {

        IBranchRepository _branchRepository;

        public BranchManager(IBranchRepository branchRepository)
        {
            _branchRepository = branchRepository;
        }

        public async Task<Branch> AddAsync(Branch branch)
        {
            return await _branchRepository.AddAsync(branch); 
        }

        public async Task DeleteAsync(int id)
        {
            await _branchRepository.DeleteAsync(id); 
        }

        public async Task<List<Branch>> GetAllAsync()
        {
            return await _branchRepository.GetAllAsync(); 
        }

        public async Task<Branch> GetByIdAsync(int id)
        {
            return await _branchRepository.GetByIdAsync(id); 
        }

        public async Task UpdateAsync(int id ,Branch branch)
        {
             await _branchRepository.UpdateAsync(id, branch); 
        }
    }
}
