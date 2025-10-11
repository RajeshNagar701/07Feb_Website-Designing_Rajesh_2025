import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./website/pages/Home";
import Header1 from "./website/components/Header1";
import Footer from "./website/components/Footer";
import Contact from "./website/pages/Contact";
import Header2 from "./website/components/Header2";
import Shop from "./website/pages/Shop";
import Shop_details from "./website/pages/Shop_details";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header1 /><Home /><Footer /></>}></Route>
          <Route path="/contact" element={<><Header2 title="Contact Us"/><Contact /><Footer /></>}></Route>
          <Route path="/shop" element={<><Header2 title="Shop Us"/><Shop /><Footer /></>}></Route>
          <Route path="/shop-details" element={<><Header2  title="Shop Details"/><Shop_details /><Footer /></>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
