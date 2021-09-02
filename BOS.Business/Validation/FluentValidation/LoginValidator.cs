using BOS.Entities.ViewModels;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BOS.Business.Validation.FluentValidation
{
    public class LoginValidator : AbstractValidator<LoginViewModel>
    {

        public LoginValidator()
        {
            RuleFor(l => l.Email).NotEmpty();
            RuleFor(l => l.Email).EmailAddress();
            RuleFor(l => l.Email).MaximumLength(150);

            RuleFor(l => l.Password).MinimumLength(6); 
           
        }
    }

}
