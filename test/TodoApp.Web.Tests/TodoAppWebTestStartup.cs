using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Volo.Abp;
using Microsoft.AspNetCore.Identity;
namespace TodoApp;

public class TodoAppWebTestStartup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddApplication<TodoAppWebTestModule>();
        services.AddIdentity<IdentityUser, IdentityRole>()
        .AddDefaultTokenProviders();

    }

    public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
    {
        app.InitializeApplication();
    }
}
