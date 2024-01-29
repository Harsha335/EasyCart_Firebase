import Home from "./pages/Home";
import {BrowserRouter,Route,Routes, useNavigate} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Product from "./pages/Product";
import AddProduct from "./pages/AddProduct";
// import { useEffect, useState } from "react";
// import { auth } from "./assets/firebase";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./ProtectedRoute";
import PageNotFound from "./pages/PageNotFound";

function App() {
  // const navigate=useNavigate();
  // const [user,setUser]=useState(null);
  // useEffect(()=>{
  //   auth.onAuthStateChanged(user=>{
  //     if(user)
  //     {
  //       setUser({
  //         uid:user.uid,
  //         email:user.email
  //       })
  //       // navigate("/home");
  //     }
  //     else{
  //       setUser(null);
  //     }
  //   })
  // },[])
  return (
    <BrowserRouter>
      <UserAuthContextProvider>
        <Routes>
          <Route exact path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route exact path="/login" element={<Login/>}/> {/* user!=null ?<Navigate to="/"/>: */}
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/products/:id" element={<Product/>}/>
          <Route exact path="/admin/add-product" element={<AddProduct/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </UserAuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
