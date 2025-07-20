using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO_Common_enteties
{
    public class Tora : Navi
    {
        public string Parasha { get; set; }
        public Tora() { }


        public override string ToString()
        {
            return Text + "פרק-" + Perek + Parasha + Book + "-חומש";
        }
    }
}
      