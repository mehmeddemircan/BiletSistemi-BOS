


using BOS.Entities.Common;

using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace BOS.Core.EntityFramework
{
    public class EfBaseRepository<TEntity, TContext> : IRepository<TEntity>
             where TEntity : BaseEntity, new()
            where TContext : DbContext, IDbContext, new()

    {
        public async Task<TEntity> AddAsync(TEntity entity)
        {
            using (var context = new TContext())
            {
                await context.Set<TEntity>().AddAsync(entity);

                await context.SaveChangesAsync();

                return entity; 
            }
        }

        public async  Task DeleteAsync(int id)
        {


            using (var context = new TContext())
            {
                var deletedEntity = await GetByIdAsync(id);

                context.Set<TEntity>().Remove(deletedEntity);

                await context.SaveChangesAsync(); 
            }

        }

        public async Task<List<TEntity>> GetAllAsync()
        {
            using (var context = new TContext())
            {
                return await context.Set<TEntity>().ToListAsync(); 
            }
        }

        public Task<IEnumerable<TEntity>> GetAllAsyncReal()
        {
            throw new NotImplementedException();
        }

        public async Task<TEntity> GetByIdAsync(int id)
        {

            using (var context = new TContext())
            {

                var branch = await context.Set<TEntity>().AsNoTracking().FirstOrDefaultAsync(e => e.Id == id);

                //if (branch == null)
                //{
                //    return NotFound(); 

                //}

                return branch; 

            }

        }

        public Task<IEnumerable<TEntity>> GetWhereAsync(Expression<Func<TEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public async Task UpdateAsync(int id , TEntity entity)
        {
            using (var context = new TContext())
            {
                context.Set<TEntity>().Update(entity);

                await context.SaveChangesAsync(); 

            }
        }
    }
}
