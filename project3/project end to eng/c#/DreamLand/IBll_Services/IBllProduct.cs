using Dto_Common_Enteties;

namespace IBll_Services
{

    public interface IBllProduct : IBllServices<productDto>
    {

        Task<productDto> AddAsync(productDto p);
        Task<List<productDto>> SelectByCategoryCodeAsync(int id);

    }
}


