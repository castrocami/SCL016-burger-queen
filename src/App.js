import logo from './logo.svg';
import './App.css';
import User from './components/User';
import ProductList from './components/ProductsList';



function App() {
  const name = "Paola";
  return (
    <div className="App">
      <ProductList />
      <User />
    </div>
  );
}
export default App;
