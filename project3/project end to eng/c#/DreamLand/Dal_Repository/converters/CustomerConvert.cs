using Dto_Common_Enteties;
namespace Dal_Repository.converters
{
    public class CustomerConvert
    {
        public static customerDto ToCustomerDto(models.Customer c)
        {
            customerDto newCustomer = new customerDto();
            newCustomer.CustId = c.CustId;
            newCustomer.CustName = c.CustName;
            newCustomer.CustEmail = c.CustEmail;
            newCustomer.CustPhone = c.CustName;
            newCustomer.CustDateOfBirth = c.CustDateOfBirth;
            return newCustomer;

        }
        public static List<customerDto> ToListCustomerDto(List<models.Customer> ListCustomer)
        {
            List<customerDto> lnew = new List<customerDto>();
            foreach (models.Customer p in ListCustomer)
            {
                lnew.Add(ToCustomerDto(p));
            }
            return lnew;
        }

        public static models.Customer ToCustomer(customerDto c)
        {
            models.Customer newCustmore = new models.Customer();
            newCustmore.CustId = c.CustId;
            newCustmore.CustName = c.CustName;
            newCustmore.CustEmail = c.CustEmail;
            newCustmore.CustPhone = c.CustPhone;
            newCustmore.CustDateOfBirth = c.CustDateOfBirth;
            return newCustmore;
        }
    }
}
