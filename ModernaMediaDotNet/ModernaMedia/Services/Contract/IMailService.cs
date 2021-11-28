using ModernaMediaDotNet.Models.Mail;
using System.Threading.Tasks;

namespace ModernaMediaDotNet.Services.Contract
{
    public interface IMailService
    {
        Task SendEmailAsync(MailRequest mailRequest);
    }
}
