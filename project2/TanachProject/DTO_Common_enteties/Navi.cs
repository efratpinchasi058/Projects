using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO_Common_enteties
{
    public class Navi : location
    {
        public string Book { get; set; }
        public string Perek {  get; set; }  
        public string Pasuk {  get; set; }  
        public string Text {  get; set; }   
             
        public override string ToString()
        {
            return base.ToString() + Book + "," + Perek + "," + Pasuk + "," + Text;   
        }
    }
}