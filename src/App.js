import './App.css';
import NavBar from "./NavBar"
import Main from "./Main"
import Footer from "./Footer"
import Ayuda from "./Ayuda"
import Generos from "./Generos"
import "./main.css"
import { Route, Routes } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';


function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/Destacados" element={<ItemListContainer />} />
          <Route path="/Ayuda" element={<Ayuda />} />
          <Route path="/Generos" element={<Generos />} />
        </Routes>
      <Footer />
    </div>
  );
}


export default App 

