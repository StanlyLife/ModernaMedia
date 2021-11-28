namespace ModernaMediaDotNet.Services.Contract
{
    public interface ITwillioService
    {
        public bool SendMessage(string body);
    }
}
