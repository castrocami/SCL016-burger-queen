import logo from './logo.svg';
import './App.css';
import User from './components/User';
import ProductList from './components/Products';
import { Col, Container, Row } from 'react-bootstrap';
import ClientOrder from './components/ClientOrder';


function App() {
  // const name = "Paola";
  return (
    <Container className="App">
      <Row>
        <Col ><ProductList /> </Col>
        <Col> <User /> </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col> <ClientOrder/> </Col>
      </Row>
    </Container>
  );
}
export default App;
