
import './App.css';
// import { BrowserRouter } from "react-router-dom"
import { HashRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Navbar from './Component/Navbar/Navbar';
import SignUp from './Component/SignUp';
import Skill from './Component/Skill';
import Cart from './Component/Cart/Cart';
import Wishlist from './Component/wishlist/Wishlist';
import Footer from './Component/footer/Footer';
import ViewSingleProduct from './Component/Shopping cart/component/ViewSingleProduct';
function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" eaxct element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="skill" element={<Skill />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/ViewSingleProduct/:productId" element={<ViewSingleProduct />}  />
        <Route path="cart" element={<>
          <Cart />
          <Footer />
        </>} />
        <Route path="wishlist" element={<>
          <Wishlist />
          <Footer />
        </>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
