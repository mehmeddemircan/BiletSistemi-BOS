using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BOS.DataAccess.Contexts;
using BOS.Entities;
using BOS.Business.Abstract;

namespace BOS.WEB_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BranchesController : ControllerBase
    {

        IBranchService _branchService;

        public BranchesController(IBranchService branchService)
        {
            _branchService = branchService;
        }

        // GET: api/Branches
        [HttpGet("get-all")]
        public async Task<ActionResult<List<Branch>>> GetBranches()
        {
            return await _branchService.GetAllAsync(); 
        }

        // GET: api/Branches/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Branch>> GetBranch(int id)
        {
            return await _branchService.GetByIdAsync(id ); 
        }

        // PUT: api/Branches/5
        
        [HttpPut("{id}")]
        public async Task PutBranch(int id, Branch branch)
        {
            branch.Id = id;
             await _branchService.UpdateAsync(id, branch);
        }

        // POST: api/Branches
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<Branch> PostBranch(Branch branch)
        {

            return await _branchService.AddAsync(branch); 

           
        }

        // DELETE: api/Branches/5
        [HttpDelete("{id}")]
        public async Task DeleteBranch(int id)
        {

            await _branchService.DeleteAsync(id); 
        }

     
    }
}
