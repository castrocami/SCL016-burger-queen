import './App.css';
import ClientOrder from './components/ClientOrder';



function App() {
  return (
    // Esto no tiene por qué ser un div container y eso hace que tenga más margen a los lados
    <div className="App">
      <ClientOrder />
    </div>
  );
}
export default App;
