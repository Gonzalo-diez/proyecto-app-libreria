import './App.css';
import NavBar from "./NavBar"
import Main from "./Main"
import Footer from "./Footer"
import "./main.css"
import ItemListContainer from './ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
      <Main />
      <Footer />
    </div>
  );
}


export default App 

