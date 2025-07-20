
using Dto_Common_Enteties;
using IBll_Services;
using IDal_Repository;

namespace Bll_Services
{
    public class  ProductBll: IBllProduct
    {
        IDalProduct<productDto> dalC;
        public ProductBll(IDalProduct<productDto> c)
        {
            this.dalC = c;
        }

        public async Task<List<productDto>> SelectAllAsync()
        {
            return await dalC.SelectAllAsync();
        }

        public async Task<List<productDto>> SelectByCategoryCodeAsync(int CatCode)
        {

            return await dalC.SelectByCategoryCodeAsync(CatCode); 

        }

        public async Task<productDto> AddAsync(productDto p)
        {
            return await dalC.AddAsync(p);
        }
    }
}
