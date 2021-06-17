import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container, Row, Col } from 'react-bootstrap';
import { useState } from "react";
import ProductsSection from "./ProductsSection";
import SendOrderToKitchen from "./SendOrder"
import User from './User';

function ClientOrder() {
    //El estado de  valor inicial,
    //DEfinir un estado
    const [orderEntries, setOrderEntries] = useState([]); 
    const [orderId, setOrderId] = useState(null);
    //Crear funcion para setear orderEntries
    const addEntry = (product) =>{
        setOrderEntries([...orderEntries, product]); // setear un nuevo estado con lo que habia antes + en nuevo producto
    }
    //Funcion que setea orderId
    const addOrderId = (Id) =>{
        setOrderId(Id);
    }
    return (
        <Container>
        <Row>
          <Col >
          <ProductsSection addEntry={addEntry}/>
          </Col>
          <Col >
          <div>
            <h1>ORDEN DEL CLIENTE</h1>
            <User addOrderId = {addOrderId}/>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Productos</th>
                        <th>Precio</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderEntries.map((orderEntry)=>{
                            return (
                            <tr>
                            <td>1</td>
                            <td>{orderEntry.name}</td>
                            <td>{orderEntry.price}</td>
                            <td>Eliminar</td>
                            </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        </div>
        <div>
            <SendOrderToKitchen orderId ={orderId} orderEntries = {orderEntries}/>
        </div>
          </Col>
        </Row>

      </Container>

    )
}

export default ClientOrder;