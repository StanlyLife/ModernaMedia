namespace ModernaMediaDotNet.Models.Mail
{
    public class MailRequest
    {
        public string ToEmail { get; set; }
        public string FromEmail { get; set; }
        public string Business { get; set; }
        public string phonenumber { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }
    }
}
