namespace Shopping_Cart_Angular.Data
{
    public class Cart
    {
        public List<CartItem> Items = new List<CartItem>() {};


        public void addCartItem(CartItem item)
        {
            for(int i = 0; i < Items.Count; i++)
            {
                if (Items[i].ProductId == item.ProductId) {
                    Items[i].Quantity++;
                    return;
                }
            }


            this.Items.Add(item);
        }


        public void deleteCartItem(int id)
        {
            for (int i = 0; i < Items.Count; i++) 
            { 
                if (Items[i].ProductId == id)
                {
                    Items.RemoveAt(i);
                    return;
                }
            }
        }


        public void updateCartItemQuantity(int id, int qty)
        {
            for (int i = 0; i < Items.Count; i++)
            {
                if (Items[i].ProductId == id && qty != 0)
                {
                    Items[i].Quantity++;
                    return;
                }
                else if (Items[i].ProductId == id && qty == 0)
                {
                    Items[i].Quantity--;
                    if (Items[i].Quantity < 1)
                    {
                        Items[i].Quantity = 1;
                    }
                    return;
                }
            }
        }

        


        public void clearCart()
        {
            this.Items.Clear();
        }

    }
}
