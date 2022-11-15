import "./App.css";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import { store } from "./Components/lib/Commerce";
import { useState, useEffect } from "react";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errMsg, setErrMsg] = useState("");
  const history = useHistory();

  async function fetchProducts() {
    const res = await store.products.list();
    setProducts(res.data);
  }

  async function getCart() {
    const res = await store.cart.retrieve();
    setCart(res);
  }
  async function addToCart(id, quantity) {
    const res = await store.cart.add(id, quantity);
    setCart(res.cart);
  }
  async function updateCartQty(id, quantity) {
    const res = await store.cart.update(id, { quantity });
    setCart(res.cart);
  }
  async function removeItem(id) {
    const res = await store.cart.remove(id);
    setCart(res.cart);
  }
  async function emptyCart() {
    const res = await store.cart.empty();
    setCart(res.cart);
  }
  async function refreshCart() {
    const newCart = await store.cart.refresh();
    setCart(newCart);
  }
  async function handleCaptureCheckout(tokenid, newOrder) {
    try {
      const incomingOrder = await store.checkout.capture(tokenid, newOrder);
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrMsg(error.data.error.message);
    }
  }
  useEffect(() => {
    fetchProducts();
    getCart();
  }, []);

  return (
    <Router>
      <Route path="/" exact>
        <div className="App">
          <Navbar totalItem={cart.total_items} />
          <Products products={products} addToCart={addToCart} />
        </div>
      </Route>
      <Route path="/cart">
        <Navbar totalItem={cart.total_items} />
        <Cart
          cart={cart}
          update={updateCartQty}
          del={removeItem}
          empty={emptyCart}
        />
      </Route>
      <Route path="/checkout">
        <Checkout
          cart={cart}
          order={order}
          onCaptureCheckout={handleCaptureCheckout}
          error={errMsg}
        />
      </Route>
    </Router>
  );
}

export default App;
