using BOS.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BOS.Entities
{
    public class Branch : BaseEntity
    {
        public int Code { get; set; }

        public string Name { get; set; }

        public int CityId { get; set; }

        public int CountryId { get; set; }

        public string Borough { get; set; }

        public string Address { get; set; }
    }
}
