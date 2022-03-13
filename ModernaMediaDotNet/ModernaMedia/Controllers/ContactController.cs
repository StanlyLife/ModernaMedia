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
            string body = $"Melding fra MODERNA MEDIA - Analyse: \n" +
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
            var result = twillioService.SendMessageToAdmin(body);
            if (!string.IsNullOrEmpty(model.phone))
            {
                    string phoneNumberFormated = model.phone.Substring(model.phone.Length - 8);
                    string MessageToContactRequester = $"Vi har mottatt din kontakt forespørsel. Vi kontakter deg snarest!\n\ndersom dette er en feil, send en epost til kontakt@modernamedia.no.";
                twillioService.SendMessageTo(MessageToContactRequester, "+47" + phoneNumberFormated);
            }
                return Ok(result);
            }
            catch (System.Exception e)
            {
                logger.LogError($"Something went wrong: {e}");
                return StatusCode(500, $"Internal server error: {e}");
            }
        }        
        [HttpPost]
        public IActionResult Audit(ContactAnalysisModel model)
        {
            string body = $"Melding fra MODERNA MEDIA - Analyse: \n" +
                $"Analyse type: {model.analysis} \n" +
                $"navn: {model.name} \n" +
                $"epost: {model.email} \n" +
                $"telefon: {model.phone} \n" +
                $"website: {model.website} \n" +
                $"tittel: {model.title} \n" +
                $"innhold: {model.body}";
            logger.LogInfo("Initializing message");
            logger.LogInfo(body);
            try
            {
            var result = twillioService.SendMessageToAdmin(body);
                if (!string.IsNullOrEmpty(model.phone))
                {
                    string phoneNumberFormated = model.phone.Substring(model.phone.Length - 8);
                    string MessageToContactRequester = $"Vi har mottatt din forespørsel om {model.analysis}-analyse for hemmesiden {model.website}. Vi kontakter deg snarest!\n\nDersom dette er en feil, send en epost til kontakt@modernamedia.no. Eller send melding til 902 65 326";
                    twillioService.SendMessageTo(MessageToContactRequester, "+47"+ phoneNumberFormated);
                }
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
