import NavBar from "../src/Components/Menu/NavBar"
import Main from "../src/Components/Productos/Main"
import Footer from "../src/Components/Menu/Footer"
import Ayuda from "../src/Components/Complementario/Ayuda"
import Generos from "../src/Components/Generos/Generos"
import GenerosList from "../src/Components/Generos/GenerosList"
import ItemDetailContainer from '../src/Components/Productos/ItemDetailContainer';
import Cart from "../src/Components/Carrito/Cart"
import Error from "../src/Components/Complementario/Error";
import "../src/Components/CSS/App.css"
import { Route, Routes } from 'react-router-dom';



function App() {
  //La app con las rutas/Routes y los path que son usados en la app
  return (
    <div>
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
    </div>
  );
}


export default App 

