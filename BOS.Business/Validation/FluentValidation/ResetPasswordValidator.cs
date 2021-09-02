using BOS.Entities.ViewModels;
using FluentValidation;

namespace BOS.Business.Validation.FluentValidation
{
    public class ResetPasswordValidator : AbstractValidator<ResetPasswordViewModel>
    {

        public ResetPasswordValidator()
        {




  
            RuleFor(l => l.NewPassword).MinimumLength(6);
            RuleFor(l => l.ConfirmPassword).MinimumLength(6);

        }
    }

}
