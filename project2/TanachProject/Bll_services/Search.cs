
using Da_repository;
using DTO_Common_enteties;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Reflection.PortableExecutable;
using System.Runtime.Intrinsics.X86;

namespace Bll_services
{
    public class Search
    {
        private static List<DTO_Common_enteties.location> Pasuklocations = new List<DTO_Common_enteties.location>();

        private static string Tora;

        public static List<DTO_Common_enteties.location> loc()
        {

            string[] Chumashim = Tora.Split('$');
            for (int i = 1; i < Chumashim.Length; i++)
            {
                string B1 = Chumashim[i].Substring(Chumashim[i].IndexOf("^") + 6, Chumashim[i].IndexOf("~") - 9);

                string[] Parashot = Chumashim[i].Split('^');
                for (int j = 1; j < Parashot.Length; j++)
                {
                    string p1 = Parashot[j].Substring(Parashot[j].IndexOf("^") + 1, Parashot[j].IndexOf("\n"));

                    string[] Prakim = Parashot[j].Split('~');
                    for (int t = 1; t < Prakim.Length; t++)
                    {
                        string p2 = Prakim[t].Substring(Prakim[t].IndexOf("-") + 1, Prakim[t].IndexOf("!") - 12);
                        string[] Psukim = Prakim[t].Split('!');
                        for (int k = 1; k < Psukim.Length; k++)
                        {
                            string p3 = Psukim[k].Substring(Psukim[k].IndexOf("{") + 1, Psukim[k].IndexOf("}") - 2);
                            Pasuklocations.Add(new DTO_Common_enteties.Tora()
                            {
                                Book = B1,
                                Parasha = p1,
                                Perek = p2,
                                Pasuk = p3,
                                Text = Psukim[k],
                            }) ;
                        }
                    }
                }

            }
            //הפיכה לקובץ גיסון פעם אחת בתוכנית כדי לא להפוך כל פעם
            string updatedJson = JsonConvert.SerializeObject(Pasuklocations);
            File.WriteAllText("C:\\Users\\This User\\Desktop\\TanachProject\\Da_repository\\bin\\Debug\\AllTora.json", updatedJson);
            return Pasuklocations;
        }
        //  בישביל לקרוא את האוביקטים צריך להפוך לקובץ טקסט מהגיסון
        public static List<DTO_Common_enteties.Tora> ChangeFromjson()
        {
            string tora = File.ReadAllText(@"C:\Users\This User\Desktop\TanachProject\Da_repository\bin\Debug\AllTora.json");
            List<DTO_Common_enteties.Tora> text = JsonConvert.DeserializeObject<List<DTO_Common_enteties.Tora>>(tora);
            return text;
        }
       
        public static List<DTO_Common_enteties.Tora> Find(string s)
        {
            List<DTO_Common_enteties.Tora> AllTora1 = ChangeFromjson();
            List<DTO_Common_enteties.Tora> AllTora2 = new List<DTO_Common_enteties.Tora>();
            foreach (var item in AllTora1)
            {
                if (item.Text.IndexOf(s) != -1)
                {
                    AllTora2.Add(item);
                }
            }
            return AllTora2;
            ;
        }
    


        public static List<string> Gimatria(string a)
        {
            int Num = int.Parse(a);
            char[] ArrAlfa = { 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ך', 'ל', 'מ', 'ם', 'נ', 'ן', 'ס', 'ע', 'פ', 'ף', 'צ', 'ץ', 'ק', 'ר', 'ש', 'ת' };
            int[] ArrDigits = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 20, 30, 40, 40, 50, 50, 60, 70, 80, 80, 90, 90, 100, 200, 300, 400 };
            string A = Da_repository.ReadText.ourfile();
            String[] ArrTora = A.Split(' ');
            List<string> ArrGimatry = new List<string>();
            for (int i = 0; i < ArrTora.Length; i++)
            {
                int sum = 0;
                foreach (var item in ArrTora[i])
                {
                    for (int j = 0; j < ArrAlfa.Length; j++)
                    {
                        if (ArrAlfa[j] == item)
                            sum += ArrDigits[j];
                    }
                }
                Boolean flag = false;
                if (sum == Num)
                {
                    for (int j = 0; j < ArrGimatry.Count; j++)
                    {
                        if (ArrTora[i] == ArrGimatry[j])
                            flag = true;

                    }
                    if (flag == false) ArrGimatry.Add(ArrTora[i]);
                }
            }
            return ArrGimatry;
        }
        static Search()
        {
            Tora = Da_repository.ReadText.ourfile();
            Pasuklocations = loc();
        }
    }
}