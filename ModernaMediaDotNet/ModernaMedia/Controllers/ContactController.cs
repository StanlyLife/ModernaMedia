using Microsoft.AspNetCore.Mvc;
using ModernaMediaDotNet.Models.contact;
using ModernaMediaDotNet.Services.Contract;

namespace ModernaMediaDotNet.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ContactController : ControllerBase
    {

        private ITwillioService twillioService;

        public ContactController(ITwillioService twillioService)
        {
            this.twillioService = twillioService;
        }

        [HttpPost]
        public bool Contact(ContactModel model)
        {
            string body = $"Melding fra MODERNA MEDIA: \n" +
                $"navn: {model.name} \n" +
                $"epost: {model.email} \n" +
                $"telefon: {model.phone} \n" +
                $"bedrift: {model.business} \n" +
                $"tittel: {model.title} \n" +
                $"innhold: {model.body}";
            var result = twillioService.SendMessage(body);
            return result;
        }
    }
}
