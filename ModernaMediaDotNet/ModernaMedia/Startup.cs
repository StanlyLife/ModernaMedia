using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Identity.Web;
using Microsoft.OpenApi.Models;
using ModernaMediaDotNet.Models.Mail;
using ModernaMediaDotNet.Models.Settings;
using ModernaMediaDotNet.Services.Contract;
using ModernaMediaDotNet.Services.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ModernaMediaDotNet
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment env)
        {
            var builder = new ConfigurationBuilder()
            .SetBasePath(env.ContentRootPath)
            .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
            .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
            .AddEnvironmentVariables();
            Configuration = configuration;
            CurrentEnvironment = env;
        }

        public IConfiguration Configuration { get; }
        private IWebHostEnvironment CurrentEnvironment { get; set; }

        private bool AllowLocalhost(string origin)
        {
            var uri = new Uri(origin);
            return (uri.Host == "localhost");
        }
        // This method gets called by the runtime. Use this method to add services to the container.

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddMicrosoftIdentityWebApi(Configuration.GetSection("AzureAd"));
            services.Configure<MailSettings>(Configuration.GetSection("MailSettings"));
            services.Configure<TwillioSettings>(Configuration.GetSection("TwillioSettings"));
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "ModernaMediaDotNet", Version = "v1" });
            });
            services.AddTransient<IMailService, MailService>();
            services.AddScoped<ITwillioService, TwillioService>();

            services.Configure<TwillioSettings>(Configuration.GetSection("TwillioSettings"));

            services.AddCors(options =>
            {

                string urls = 
                "https://modernamedia.no/," +
                "*modernamedia.*," +
                "https://*.modernamedia.no/*," +
                "https://modernamedia.no*," +
                "http://modernamedia.no/,";
                if (CurrentEnvironment.IsDevelopment())
                {
                    urls += "http://localhost:4200," +
                    "http://localhost:4200/*,";
                }


                string[] corsList = urls.Split(",");
                options.AddPolicy("CorsPolicy", builder =>
                {
                    builder
                    .WithOrigins(corsList.ToArray())
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .SetIsOriginAllowedToAllowWildcardSubdomains()
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ModernaMediaDotNet v1"));

            }

            app.UseCors("CorsPolicy");
            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
