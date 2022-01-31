import NavBar from "../Menu/NavBar"
import Main from "../Productos/Main"
import Footer from "../Menu/Footer"
import Ayuda from "../Complementario/Ayuda"
import Generos from "../Generos/Generos"
import GenerosList from "../Generos/GenerosList"
import ItemDetailContainer from '../Productos/ItemDetailContainer';
import Error from "../Complementario/Error";
import Cart from "../Carrito/Cart"
import CheckOut from "../Carrito/CheckOut"
import SignUp from "../User/SignUp"
import Login from "../User/Login"
import User from "../User/User"
import ForgotPassword from "../User/ForgotPassword"
import CartProvider from "../Carrito/CartContext"
import AuthProvider from "../User/AuthContext"
import "../CSS/App.css"
import { Route, Routes } from 'react-router-dom';

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

