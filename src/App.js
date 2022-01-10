import NavBar from "../src/Components/Menu/NavBar"
import Main from "../src/Components/Productos/Main"
import Footer from "../src/Components/Menu/Footer"
import Ayuda from "../src/Components/Complementario/Ayuda"
import Generos from "../src/Components/Generos/Generos"
import ItemListContainer from '../src/Components/Productos/ItemListContainer';
import ItemDetailContainer from '../src/Components/Productos/ItemDetailContainer';
import Error from "../src/Components/Complementario/Error";
import "../src/Components/CSS/App.css"
import { Route, Routes, useParams } from 'react-router-dom';



function App() {
  const { id } = useParams()
  //La app con las rutas/Routes y los path que son usados en la app
  return (
    <div>
      <NavBar />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/Destacados" element={<ItemListContainer />} />
          <Route path="/Ayuda" element={<Ayuda />} />
          <Route path="/Generos" element={<Generos />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} key={id} />
          <Route path="*" element={<Error />} />
        </Routes>
      <Footer />
    </div>
  );
}


export default App 

