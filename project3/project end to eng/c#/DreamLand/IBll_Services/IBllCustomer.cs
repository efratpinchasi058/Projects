using Dto_Common_Enteties;
using IBll_Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IBll_Services
{
     public interface IBllCustomer : IBllServices<customerDto>
{
        Task<customerDto> AddOrUpdateCustomerAsync(customerDto customerDto);

        Task<customerDto> loginAsync(string name,string email,int id);
    }
}