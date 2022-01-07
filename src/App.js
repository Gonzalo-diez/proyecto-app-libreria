import './App.css';
import NavBar from "./NavBar"
import Main from "./Main"
import Footer from "./Footer"
import Ayuda from "./Ayuda"
import Generos from "./Generos"
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Error from "./Error";
import "./main.css"
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/Destacados" element={<ItemListContainer />} />
          <Route path="/Ayuda" element={<Ayuda />} />
          <Route path="/Generos" element={<Generos />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error />} />
        </Routes>
      <Footer />
    </div>
  );
}


export default App 

