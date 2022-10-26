import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div className="App">      
      <NavBar />         
      <ItemListContainer color={"#51557E"} greeting={"Bienvenidos a Detail Garage"} />
      <Main /> 
      <Footer />
    </div>
  );
}

export default App;
