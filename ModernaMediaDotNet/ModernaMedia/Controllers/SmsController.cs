using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ModernaMediaDotNet.Services.Contract;
using System;
using System.Threading.Tasks;

namespace ModernaMediaDotNet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SmsController : ControllerBase
    {
        private readonly ITwillioService twillioService;

        public SmsController(ITwillioService twillioService)
        {
            this.twillioService = twillioService;
        }
        [HttpPost]
        public async Task<bool> SendSmsl([FromQuery] string body)
        {
            return twillioService.SendMessage(body);
        }
    }
}
