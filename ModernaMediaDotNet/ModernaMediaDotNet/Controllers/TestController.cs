using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ModernaMediaDotNet.Controllers {

	[EnableCors("DefaultCorsPolicy")]
	[ApiController]
	[Route("api/[controller]/[action]")]
	public class Testcontroller : ControllerBase {

		private static readonly string[] Summaries = new[]
		{
			"Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
		};

		private readonly ILogger<WeatherForecastController> _logger;

		public Testcontroller(ILogger<WeatherForecastController> logger) {
			_logger = logger;
		}

		[HttpGet]
		public IEnumerable<string> Get() {
			List<string> test = new List<string>();
			test.Add("test");
			return test;
		}
	}
}