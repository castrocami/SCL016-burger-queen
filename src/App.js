import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import ClientOrder from './components/ClientOrder';



function App() {
  // const name = "Paola";
  return (
    <Container className="App">
      <Row>
        <Col ></Col>
        <Col>
          <h1>
            Justa Panaderia
          </h1>
          <h3>
            Toma Pedidos
          </h3>
        </Col>
      </Row>
      <Row>
        <Col> <ClientOrder /> </Col>
      </Row>
    </Container>
  );
}
export default App;
