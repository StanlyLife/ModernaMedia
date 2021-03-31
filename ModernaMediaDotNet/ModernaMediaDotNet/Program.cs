using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace ModernaMediaDotNet {

	public class Program {

		public static void Main(string[] args) {
			CreateHostBuilder(args).Build().Run();
		}

		public static IHostBuilder CreateHostBuilder(string[] args) =>
	Host.CreateDefaultBuilder(args)
		.ConfigureWebHostDefaults(webBuilder => {
			webBuilder.UseStartup<Startup>();
		});

		//public static IWebHostBuilder CreateHostBuilder(string[] args) =>
		//WebHost.CreateDefaultBuilder(args)
		//.UseUrls("https://*:5001;http://*:5000")
		//.UseStartup<Startup>();
	}
}