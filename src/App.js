import logo from './logo.svg';
import './App.css';
import User from './components/User';
import ProductsList from './components/ProductsList';
import { Col, Container, Row} from 'react-bootstrap';


function App() {
  // const name = "Paola";
  return (
    <Container className="App">
      <Row>
        <Col ><ProductsList /> </Col>
        <Col> <User /> </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>AQUI VA EL PEDIDO</Col>
      </Row>
    </Container>
  );
}
export default App;
