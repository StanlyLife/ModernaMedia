namespace ModernaMediaDotNet.Models.contact
{
    public class ContactModel
    {
        public string email { get; set; }
        public string phone { get; set; }
        public string name { get; set; }
        public string title { get; set; }
        public string business { get; set; }
        public string body { get; set; }
    }    
    public class ContactAnalysisModel
    {
        public string analysis { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
        public string name { get; set; }
        public string title { get; set; }
        public string website { get; set; }
        public string body { get; set; }
    }
}
