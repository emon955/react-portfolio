
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
import SingleRelatedPage from './Component/Shopping cart/component/Related Product/SingleRelatedPage';
import Shop from './Component/Shop/Shop';
import ScrollToTop from './Component/ScrollTop/ScrollToTop';
function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" eaxct element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="skill" element={<Skill />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="shop" element={<Shop />} />
        <Route path="/ViewSingleProduct/:productId" element={<><ViewSingleProduct /><Footer/></>}  />
        <Route path="/SingleRelatedPage/:productId" element={<><SingleRelatedPage /><Footer/></>}  />
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
