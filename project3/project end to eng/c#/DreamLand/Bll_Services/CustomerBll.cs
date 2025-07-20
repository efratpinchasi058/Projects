using Dto_Common_Enteties;
using IBll_Services;
using IDal_Repository;

namespace Bll_Services
{
    public class CustomerBll : IBllCustomer
    {
        IDalCustmore<customerDto> dalC;
        public CustomerBll(IDalCustmore<customerDto> c)
        {
            this.dalC = c;
        }

        public async Task<customerDto> AddOrUpdateCustomerAsync(customerDto customerDto)
        {
            return await dalC.AddOrUpdateCustomerAsync(customerDto);
        }

        public async Task<customerDto> loginAsync(string name, string email, int id)
        {
            return await dalC.loginAsync(name,email,id);
        }

        public async Task<List<customerDto>> SelectAllAsync()
        {
            return await dalC.SelectAllAsync();
        }
    }
}