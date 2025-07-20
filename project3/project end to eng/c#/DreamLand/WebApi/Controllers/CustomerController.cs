using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Dto_Common_Enteties;
using IBll_Services;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        IBllCustomer c;
        public CustomerController(IBllCustomer c)
        {
            this.c = c;

        }

        [HttpGet]
        public async Task<List<customerDto>> GetAsync()
        {

            return await c.SelectAllAsync();
        }
        [HttpPost("register")]
        public async Task<customerDto> PostAsync([FromBody] customerDto customer)
        {
            return await c.AddOrUpdateCustomerAsync(customer); 
  
        }

        [HttpPost("login")]
        public async Task<customerDto> PostLogInAsync([FromBody] customerDto customer)
        {
            return await c.loginAsync( customer.CustName,  customer.CustEmail,customer.CustId);

        }

    }
}