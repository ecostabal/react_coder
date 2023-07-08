import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main>
        <ItemListContainer greeting="¡Hola, pronto verás nuestros productos!"/>
      </main>
    </div>
  );
}

export default App;
