using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ModernaMediaDotNet {

	public class Startup {

		public Startup(IConfiguration configuration) {
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services) {
			services.AddControllers();
			services.AddSwaggerGen(c => {
				c.SwaggerDoc("v1", new OpenApiInfo { Title = "ModernaMediaDotNet", Version = "v1" });
			});
			services.AddCors(options =>
	options.AddPolicy("DefaultCorsPolicy", builder => builder
		.AllowAnyOrigin()
		.AllowAnyHeader()
		.AllowAnyMethod())
);
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env) {
			app.UseDeveloperExceptionPage();
			if (env.IsDevelopment()) {
				app.UseSwagger();
				app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ModernaMediaDotNet v1"));
			}

			//app.UseHttpsRedirection();

			app.UseRouting();

			app.UseCors(x => x
			.AllowAnyOrigin()
			.AllowAnyMethod()
			.AllowAnyHeader()
			.SetIsOriginAllowed(origin => true) // allow any origin
												//.AllowCredentials()
); // allow credentials

			app.UseAuthorization();

			app.UseEndpoints(endpoints => {
				endpoints.MapControllers();
			});
		}
	}
}