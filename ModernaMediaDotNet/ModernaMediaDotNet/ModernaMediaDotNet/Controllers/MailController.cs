using Microsoft.AspNetCore.Mvc;
using ModernaMediaDotNet.Models.Mail;
using ModernaMediaDotNet.Services.Contract;
using System;
using System.Threading.Tasks;

namespace ModernaMediaDotNet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MailController : ControllerBase
    {
        private readonly IMailService mailService;
        public MailController(IMailService mailService)
        {
            this.mailService = mailService;
        }
        [HttpPost]
        public async Task<IActionResult> SendMail([FromForm] MailRequest request)
        {
            try
            {
                await mailService.SendEmailAsync(request);
                return Ok();
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
    }
}
