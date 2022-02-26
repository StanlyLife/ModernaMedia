using Microsoft.Extensions.DependencyInjection;
using ModernaMediaDotNet.Services;
using ModernaMediaDotNet.Services.LoggerService;

namespace ModernaMediaDotNet.Extensions
{
    public static class ServiceExtensions
    {
        public static void ConfigureLoggerService(this IServiceCollection services)
        {
            services.AddSingleton<ILoggerManager, LoggerManager>();
        }
    }
}
