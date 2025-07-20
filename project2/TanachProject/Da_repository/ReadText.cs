namespace Da_repository
{
    public class ReadText
    {
        public static string ourfile()
        {
            string s = File.ReadAllText(@"C:\Users\This User\Desktop\TanachProject\AllTora.txt");
            return s;
        }

    }
}