namespace ModernaMediaDotNet.Services.Contract
{
    public interface ITwillioService
    {
        public bool SendMessageToAdmin(string body);
        public bool SendMessageTo(string body, string phonenumber);
    }
}
