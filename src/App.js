import './App.css';
import User from './components/User';
import { Col, Container, Row } from 'react-bootstrap';
import ClientOrder from './components/ClientOrder';


function App() {
  // const name = "Paola";
  return (
    <Container className="App">
      <Row>
        <Col ></Col>
        <Col> <User /> </Col>
      </Row>
      <Row>
        <Col> <ClientOrder/> </Col>
      </Row>
    </Container>
  );
}
export default App;
