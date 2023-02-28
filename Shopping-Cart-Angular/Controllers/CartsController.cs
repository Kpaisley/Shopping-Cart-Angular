using Microsoft.AspNetCore.Mvc;
using Shopping_Cart_Angular.Data;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Shopping_Cart_Angular.Controllers
{
    [Route("[controller]")]
    [ApiController]

    public class CartsController : ControllerBase
    {

        private static readonly Cart _cartRepo = new Cart() { Items = new List<CartItem>() };



        // GET: api/<CartsController>
        [HttpGet]
        public List<CartItem> Get()
        {
            return _cartRepo.Items;
        }

        // GET api/<CartsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<CartsController>
        [HttpPost]
        public void Post([FromBody] CartItem item)
        {
            _cartRepo.addCartItem(item);
        }

        // PUT api/<CartsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] int quantity)
        {
            _cartRepo.updateCartItemQuantity(id, quantity);
        }

        // DELETE api/<CartsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _cartRepo.deleteCartItem(id);
        }
    }
}
