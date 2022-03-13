using Microsoft.Extensions.Options;
using ModernaMediaDotNet.Models.Settings;
using ModernaMediaDotNet.Services.Contract;
using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account;
using Twilio.Types;

namespace ModernaMediaDotNet.Services.Service
{
    public class TwillioService : ITwillioService
    {
        private readonly IOptions<TwillioSettings> config;

        public TwillioService(IOptions<TwillioSettings> config)
        {
            this.config = config;
        }

        public bool SendMessageTo(string body,string phonenumber)
        {
            try
            {
                var accountSid = config.Value.accountSid;
                var authToken = config.Value.authToken;
                TwilioClient.Init(accountSid, authToken);

                var messageOptions = new CreateMessageOptions(
                    new PhoneNumber(phonenumber));
                messageOptions.MessagingServiceSid = config.Value.MessagingServiceSid;
                messageOptions.Body = body;
                messageOptions.From = "M Media";


                var message = MessageResource.Create(messageOptions);
                Console.WriteLine(message);
                return message != null;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine(e);
                throw e;
            }
        }
        public bool SendMessageToAdmin(string body)
        {
            try
            {
            var accountSid = config.Value.accountSid;
            var authToken = config.Value.authToken;
            TwilioClient.Init(accountSid, authToken);

            var messageOptions = new CreateMessageOptions(
                new PhoneNumber(config.Value.phonenumber));
            messageOptions.MessagingServiceSid = config.Value.MessagingServiceSid;
            messageOptions.Body = body;
            messageOptions.From = "M Media";
            

            var message = MessageResource.Create(messageOptions);
            Console.WriteLine(message);
            return message != null;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine(e);
                throw e;
            }
        }
    }
}
