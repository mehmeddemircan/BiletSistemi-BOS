using BOS.Entities;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BOS.Business.Validation.FluentValidation
{
    public  class BranchValidator : AbstractValidator<Branch>
    {


        public BranchValidator()
        {
            RuleFor(b => b.Name).NotEmpty();
            RuleFor(b => b.Name).MinimumLength(2);
            RuleFor(b => b.Code).NotEmpty();
            RuleFor(b => b.CityId).NotEmpty();
            //RuleFor(b => b.UnitPrice).GreaterThan(0);
            //RuleFor(b => b.UnitPrice).GreaterThanOrEqualTo(10).When(p => p.CategoryId == 1);
            //RuleFor(b => b.ProductName).Must(StartWithA).WithMessage("Urunler A harfi ile baslamali ");
        }

        //private bool StartWithA(string arg)
        //{
        //    return arg.StartsWith("A");
        //}
   
    }
}
