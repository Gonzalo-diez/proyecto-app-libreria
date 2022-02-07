import NavBar from "./NavBar"
import Main from "./Main"
import Footer from "./Footer"
import Ayuda from "./Ayuda"
import Generos from "./Generos"
import GenerosList from "./GenerosList"
import ItemDetailContainer from './ItemDetailContainer';
import Error from "./Error";
import Cart from "./Cart"
import CheckOut from "./CheckOut"
import SignUp from "./SignUp"
import Login from "./Login"
import User from "./User"
import ForgotPassword from "./ForgotPassword"
import CartProvider from "./Context/CartContext"
import AuthProvider from "./Context/AuthContext"
import { Route, Routes } from 'react-router-dom';
import "./CSS/App.css"

function App() {
  //La app con las rutas/Routes y los path que son usados en la app
  return (
    <div>
      <AuthProvider>
        <CartProvider>
          <NavBar />
            <Routes>
              <Route path="/" exact element={<Main />} />
              <Route path="/Ayuda" element={<Ayuda />} />
              <Route path="/Category" element={<Generos />} />
              <Route path="/Category/:genero" element={<GenerosList />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path= "/Checkout" element={<CheckOut />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/User" element={<User />} />
              <Route path="/ForgotPassword" element={<ForgotPassword />} />
              <Route path="*" element={<Error />} />
            </Routes>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App 

