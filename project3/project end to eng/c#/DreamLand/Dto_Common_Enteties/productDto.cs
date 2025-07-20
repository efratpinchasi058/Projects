namespace Dto_Common_Enteties
{
    public class productDto
    {
        public int ProdId { get; set; }

        public string ProdName { get; set; } = null!;

        public int? CatCode { get; set; }

        public int? CompanyCode { get; set; }

        public string? Description { get; set; }

        public decimal? Price { get; set; }

        public string? Image { get; set; }

        public int? StockQty { get; set; }

        public DateOnly? LastUpdated { get; set; }



        
    }
}
