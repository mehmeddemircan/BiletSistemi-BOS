using BOS.Entities;
using BOS.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace BOS.Core
{
    public  interface IRepository<T>  where T : BaseEntity, new()
    {


        Task<List<T>> GetAllAsync();

        Task<T> GetByIdAsync(int id );

        Task<T> AddAsync(T entity); 

        Task UpdateAsync(int id , T entity);

        Task DeleteAsync(int id);

        //real methods I think in sector 
        Task<IEnumerable<T>> GetAllAsyncReal();
        Task<IEnumerable<T>> GetWhereAsync(Expression<Func<T, bool>> predicate);


    }
}
