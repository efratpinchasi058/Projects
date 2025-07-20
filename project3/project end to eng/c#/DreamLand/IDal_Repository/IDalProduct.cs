
using Dto_Common_Enteties;

namespace IDal_Repository
{
    public  interface IDalProduct<T>
    {
        public Task<List<T>> SelectAllAsync();
        public Task<productDto> AddAsync(T t);
        Task<List<T>> SelectByCategoryCodeAsync(int catCode);
     
    }
}
