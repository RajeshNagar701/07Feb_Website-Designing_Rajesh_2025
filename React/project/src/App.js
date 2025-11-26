import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./website/pages/Home";
import Header1 from "./website/components/Header1";
import Footer from "./website/components/Footer";
import Contact from "./website/pages/Contact";
import Header2 from "./website/components/Header2";
import Shop from "./website/pages/Shop";
import Shop_details from "./website/pages/Shop_details";


import Afooter from './admin/components/Afooter'
import Aheader from './admin/components/Aheader'

import Admin_login from "./admin/pages/Admin_login";
import Dashboard from "./admin/pages/Dashboard";
import Add_categories from "./admin/pages/Add_categories";
import Add_products from "./admin/pages/Add_products";
import Manage_categories from "./admin/pages/Manage_categories";
import Manage_products from "./admin/pages/Manage_products";
import Manage_customers from "./admin/pages/Manage_customers";
import Manage_contacts from "./admin/pages/Manage_contacts";
import Shop_view from "./website/pages/Shop_view";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          {
            //website routes 
          }
          <Route path="/" element={<><Header1 /><Home /><Footer /></>}></Route>
          <Route path="/contact" element={<><Header2 title="Contact Us" /><Contact /><Footer /></>}></Route>
          <Route path="/shop" element={<><Header2 title="Shop Us" /><Shop /><Footer /></>}></Route>
          <Route path="/shop_view/:id" element={<><Header2 title="Shop View" /><Shop_view /><Footer /></>}></Route>
          <Route path="/shop-details/:id" element={<><Header2 title="Shop Details" /><Shop_details /><Footer /></>}></Route>

          {
            //Admin routes 
          }
          <Route path="/admin-login" element={<><Admin_login /><Afooter/></>}></Route>
          <Route path="/dashboard" element={<><Aheader/><Dashboard /><Afooter/></>}></Route>
          <Route path="/add_categories" element={<><Aheader/><Add_categories /><Afooter/></>}></Route>  
          <Route path="/manage_categories" element={<><Aheader/><Manage_categories /><Afooter/></>}></Route>  

          <Route path="/add_products" element={<><Aheader/><Add_products /><Afooter/></>}></Route>  
          <Route path="/manage_products" element={<><Aheader/><Manage_products /><Afooter/></>}></Route>  

          <Route path="/manage_customers" element={<><Aheader/><Manage_customers /><Afooter/></>}></Route>  

          <Route path="/manage_contacts" element={<><Aheader/><Manage_contacts /><Afooter/></>}></Route>    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
