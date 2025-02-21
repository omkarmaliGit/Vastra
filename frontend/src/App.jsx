import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Collection from "./pages/collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import ShopContextProvider from "./context/ShopContext";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <ShopContextProvider>
          <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/place-order" element={<PlaceOrder />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ShopContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
