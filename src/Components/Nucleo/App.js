import NavBar from "../Menu/NavBar"
import Main from "../Productos/Main"
import Footer from "../Menu/Footer"
import Ayuda from "../Complementario/Ayuda"
import Generos from "../Generos/Generos"
import GenerosList from "../Generos/GenerosList"
import ItemDetailContainer from '../Productos/ItemDetailContainer';
import Error from "../Complementario/Error";
import Cart from "../Carrito/Cart"
import CartProvider from "../Carrito/CartContext"
import "../CSS/App.css"
import { Route, Routes } from 'react-router-dom';

function App() {
  //La app con las rutas/Routes y los path que son usados en la app
  return (
    <div>
        <CartProvider>
          <NavBar />
            <Routes>
              <Route path="/" exact element={<Main />} />
              <Route path="/Ayuda" element={<Ayuda />} />
              <Route path="/Category" element={<Generos />} />
              <Route path="/Category/:genero" element={<GenerosList />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="*" element={<Error />} />
            </Routes>
          <Footer />
        </CartProvider>
    </div>
  );
}

export default App 

