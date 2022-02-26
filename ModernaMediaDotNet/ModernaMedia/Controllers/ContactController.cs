using Microsoft.AspNetCore.Mvc;
using ModernaMediaDotNet.Models.contact;
using ModernaMediaDotNet.Services;
using ModernaMediaDotNet.Services.Contract;

namespace ModernaMediaDotNet.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ContactController : ControllerBase
    {

        private ITwillioService twillioService;
        private readonly ILoggerManager logger;

        public ContactController(ITwillioService twillioService, ILoggerManager logger)
        {
            this.twillioService = twillioService;
            this.logger = logger;
        }

        [HttpPost]
        public IActionResult Contact(ContactModel model)
        {
            string body = $"Melding fra MODERNA MEDIA: \n" +
                $"navn: {model.name} \n" +
                $"epost: {model.email} \n" +
                $"telefon: {model.phone} \n" +
                $"bedrift: {model.business} \n" +
                $"tittel: {model.title} \n" +
                $"innhold: {model.body}";
            logger.LogInfo("Initializing message");
            logger.LogInfo(body);
            try
            {
            var result = twillioService.SendMessage(body);
                return Ok(result);
            }
            catch (System.Exception e)
            {
                logger.LogError($"Something went wrong: {e}");
                return StatusCode(500, $"Internal server error: {e}");
            }
        }
    }
}
