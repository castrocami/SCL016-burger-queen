import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import ClientOrder from './components/ClientOrder';



function App() {
  // const name = "Paola";
  return (
    <Container className="App">
      <ClientOrder />
    </Container>
  );
}
export default App;
