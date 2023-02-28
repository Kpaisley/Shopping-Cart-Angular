using Microsoft.AspNetCore.Mvc;
using Shopping_Cart_Angular.Data;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Shopping_Cart_Angular.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly List<Product> _products = new List<Product> { new Product { ProductId=1, ProductName="Burger", UnitPrice=6.99, ImageUrl="https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"},
                                                                       new Product { ProductId=2, ProductName="Nachos", UnitPrice=7.99, ImageUrl="https://images.unsplash.com/photo-1582169296194-e4d644c48063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"},
                                                                       new Product { ProductId=3, ProductName="Pepperoni Pizza", UnitPrice=5.49, ImageUrl="https://images.unsplash.com/photo-1564249484723-8303f8ee99e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1784&q=80"},
                                                                       new Product { ProductId=4, ProductName="Hot Dog", UnitPrice=5.49, ImageUrl="https://images.unsplash.com/photo-1599599810694-b5b37304c041?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"},
                                                                       new Product { ProductId=5, ProductName="Fries", UnitPrice=4.99, ImageUrl="https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
                                                                       new Product { ProductId=6, ProductName="Cesar Salad", UnitPrice=6.99, ImageUrl="https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
                                                                       new Product { ProductId=7, ProductName="Tea", UnitPrice=2.99, ImageUrl="https://images.unsplash.com/photo-1580666622398-d5bffc4c9051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"},
                                                                       new Product { ProductId=8, ProductName="Coffee", UnitPrice=2.99, ImageUrl="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1184&q=80"},
                                                                       new Product { ProductId=9, ProductName="Chocolate Milkshake", UnitPrice=5.99, ImageUrl="https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}};


        // GET: api/<ProductController>
        [HttpGet]
        public List<Product> Get()
        {
            return _products;
        }
     
    }
}
