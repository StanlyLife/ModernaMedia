using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ModernaMediaDotNet.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace ModernaMediaDotNet.Controllers
{
	[EnableCors("DefaultCorsPolicy")]
	[ApiController]
	[Route("api/[controller]/[action]")]
	public class Testcontroller : ControllerBase
	{
		private readonly ILogger<WeatherForecastController> _logger;
		private readonly Test t;

		public Testcontroller(
			ILogger<WeatherForecastController> logger,
			Test t
			) {
			_logger = logger;
			this.t = t;
		}

		[HttpGet]
		public string Get() {
			t.IncrementNumber++;
			return t.IncrementNumber.ToString();
		}
	}
}