import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

const App = () => {
  const busqueda = "Busca"
  return (
    <>    
     <Navbar/> 
     <ItemListContainer greeting={"Almacen de bebidas"}/>    
    </>
      
  );
}

export default App;