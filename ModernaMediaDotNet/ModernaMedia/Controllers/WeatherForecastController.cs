using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Identity.Web.Resource;
using ModernaMediaDotNet.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace ModernaMediaDotNet.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {


        public WeatherForecastController()
        {
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var client = new HttpClient();
            var request = new HttpRequestMessage(HttpMethod.Get, "https://trondheim-autopark.giantleap.net/public/rest/site/zone/7333/capacity");
            request.Headers.Add("Authorization", "Basic c2l0ZXByb3BlcnR5Onc2cjI4ODI1YXNteDVxNThhcGxp");
            var response = await client.SendAsync(request);
            response.EnsureSuccessStatusCode();
            var result = await response.Content.ReadAsStringAsync();
            Console.WriteLine(result);
            return Ok(result);
        }
    }
}
