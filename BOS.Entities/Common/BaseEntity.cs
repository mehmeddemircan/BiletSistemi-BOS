using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BOS.Entities.Common
{
     public class BaseEntity 
    {

        public int Id { get; set; }

        public bool? IsActive { get; set; }

        public DateTime CreatedTime { get; set; }

        public int CreatedBy { get; set; }

        public DateTime?  UpdatedTime { get; set; }

        public int? UpdatedBy { get; set; }
    
    
    }
}
