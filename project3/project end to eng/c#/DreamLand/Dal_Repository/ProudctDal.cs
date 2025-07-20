using Dal_Repository.converters;
using Dal_Repository.models;
using Dto_Common_Enteties;
using IDal_Repository;
using Microsoft.EntityFrameworkCore;

namespace Dal_Repository
{
    public class ProudctDal : IDalProduct<productDto>
    {

            DreamLandContext db;
            public ProudctDal(DreamLandContext db)
            {
                this.db = db;
            }
            public async Task<List<productDto>> SelectAllAsync()
            {
                var q = await db.Products.Include(c => c.CatCodeNavigation).ToListAsync();
                return converters.ProudctConvert.ToListProductDto(q);
            }

            public async Task<productDto> AddAsync(productDto c)
            {
                db.Products.Add(converters.ProudctConvert.ToProduct(c));
                await db.SaveChangesAsync();
                return c;
            }
        public async Task<int> UpdateAsync(int id, productDto product)
        {
            var existingProduct = await db.Products.FirstOrDefaultAsync(c => c.ProdId == id);
            if (existingProduct == null)
                return -1;
            models.Product updatedProduct = ProudctConvert.ToProduct(product);
            existingProduct.ProdName = updatedProduct.ProdName;
            existingProduct.StockQty = updatedProduct.StockQty;
            existingProduct.Price = updatedProduct.Price;
            existingProduct.Description = updatedProduct.Description;
            existingProduct.LastUpdated = updatedProduct.LastUpdated;
              //existingProduct.LastUpdated = DateTime.Today;

            int result = await db.SaveChangesAsync();
            return result;
        }
        public async Task<int> DeleteAsync(int id)
            {

                var c = await db.Products.FirstOrDefaultAsync(c => c.ProdId == id);
                if (c == null)
                    return -1;
                else
                {
                    db.Products.Remove(c);
                    int x = await db.SaveChangesAsync();
                    return x;
                }
            }


        public async Task<List<productDto>> SelectByCategoryCodeAsync(int CatCode)
        {
            try
            {
                var products = await db.Products
                    .Where(p => p.CatCode == CatCode)
                    .ToListAsync();

                return products.Select(converters.ProudctConvert.ToProductDto).ToList();
            }
            catch (Exception ex)
            {
                throw new Exception("Error retrieving products by category code", ex);
            }
        }

    }
    }

