using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto_Common_Enteties
{
    public class customerDto
    {
        public int CustId { get; set; }

        public string CustName { get; set; } = null!;

        public string? CustPhone { get; set; }

        public string? CustEmail { get; set; }

        public DateOnly? CustDateOfBirth { get; set; }
    }
}
