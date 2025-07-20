using Dto_Common_Enteties;
using IDal_Repository;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(opotion => opotion.AddPolicy("AllowAll",//נתינת שם להרשאה
    p => p.AllowAnyOrigin()//מאפשר כל מקור
    .AllowAnyMethod()//כל מתודה - פונקציה
    .AllowAnyHeader()));//וכל כותרת פונקציה

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IDalProduct<productDto>, Dal_Repository.ProudctDal>();
builder.Services.AddScoped<IDalCustmore<customerDto>, Dal_Repository.CustmoreDal>();
builder.Services.AddScoped<IBll_Services.IBllProduct, Bll_Services.ProductBll>();
builder.Services.AddScoped<IBll_Services.IBllCustomer, Bll_Services.CustomerBll>();


builder.Services.AddDbContext<Dal_Repository.models.DreamLandContext>
(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnrction")));
var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("AllowAll");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
