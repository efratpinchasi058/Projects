using Dto_Common_Enteties;

namespace Dal_Repository.converters
{
    internal class ProudctConvert
    {

        public static productDto ToProductDto(models.Product p)
        {
            productDto newP = new productDto();
            newP.CatCode = p.CatCode;
            newP.ProdId = p.ProdId;
            newP.StockQty = p.StockQty;
            newP.Price = p.Price;
            newP.CompanyCode = p.CompanyCode;
            newP.Image = p.Image;
            newP.LastUpdated = p.LastUpdated;
            newP.Description = p.Description;
            newP.ProdName = p.ProdName;
            return newP;
 
        }
        public static List<productDto> ToListProductDto(List<models.Product> LP)
        {
            List<productDto> lnew = new List<productDto>();
            foreach (models.Product p in LP)
            {
                lnew.Add(ToProductDto(p));
            }
            return lnew;
        }

        public static models.Product ToProduct(productDto c)
        {
            models.Product newP = new models.Product();
            newP.ProdId = c.ProdId;
            newP.LastUpdated= c.LastUpdated;
            newP.ProdName = c.ProdName;
            newP.CompanyCode = c.CompanyCode;
            newP.Price = c.Price;
            newP.CatCode = c.CatCode;
            newP.Description = c.Description;
            newP.StockQty = c.StockQty;
            newP.Image = c.Image;


            return newP;
        }
    }
}
