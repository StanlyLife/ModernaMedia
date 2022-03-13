using Microsoft.AspNetCore.Mvc;
using ModernaMediaDotNet.Services.Contract;
using System.Threading.Tasks;
using ModernaMediaDotNet.Models.CTA;

namespace ModernaMediaDotNet.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CTAController : ControllerBase
    {
        private ITwillioService twillioService;

        public CTAController(ITwillioService twillioService)
        {
            this.twillioService = twillioService;
        }

        [HttpPost]
        public bool BookAMeeting(CTA model)
        {
            string body = $"Melding fra: {model.Email} - {model.Phonenumber} : \n {model.Body}";
            var result = twillioService.SendMessageToAdmin(body);
            return result;
        }
    }
}
