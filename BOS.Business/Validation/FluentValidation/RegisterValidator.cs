using BOS.Entities.ViewModels;
using FluentValidation;

namespace BOS.Business.Validation.FluentValidation
{
    public class RegisterValidator : AbstractValidator<RegisterViewModel>
    {

     

            public   RegisterValidator() {

            RuleFor(r => r.UserName).MinimumLength(2); 
           

            RuleFor(l => l.Email).NotEmpty();
            RuleFor(l => l.Email).EmailAddress();
            RuleFor(l => l.Email).MaximumLength(150);

            RuleFor(l => l.Password).MinimumLength(6);

        }
    }
}
