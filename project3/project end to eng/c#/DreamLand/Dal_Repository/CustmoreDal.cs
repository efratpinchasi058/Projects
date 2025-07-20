using Dal_Repository.models;
using Dto_Common_Enteties;
using IDal_Repository;
using Microsoft.EntityFrameworkCore;

namespace Dal_Repository
{

    public class CustmoreDal : IDalCustmore<customerDto>
    {
        DreamLandContext db;
        public CustmoreDal(DreamLandContext db)
        {
            this.db = db;
        }

        public async Task<customerDto> AddOrUpdateCustomerAsync(customerDto c)
        {
            db.Customers.Add(converters.CustomerConvert.ToCustomer(c));
            await db.SaveChangesAsync();
            return c;
        }
        public async Task<customerDto> loginAsync(string name, string email, int id)
        {
            var c=await db.Customers
                .Where(customer => customer.CustId == id && customer.CustEmail == email && customer.CustName == name)
                .FirstOrDefaultAsync();
                return converters.CustomerConvert.ToCustomerDto(c);
       
        }

        public async Task<List<customerDto>> SelectAllAsync()
        {
            var q = await db.Customers.ToListAsync();
            return converters.CustomerConvert.ToListCustomerDto(q);
        }

 
    }
}