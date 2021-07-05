import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { useState } from "react";
import ProductsSection from "./ProductsSection";
import SendOrderToKitchen from "./SendOrder"
import User from './User';
import './ClientOrder.css'
import { TrashFill } from 'react-bootstrap-icons';


function ClientOrder() {
	//El estado de  valor inicial,
	//Definir un estado
	const [orderEntries, setOrderEntries] = useState([]);
	const [orderId, setOrderId] = useState(null);
	const [userName, setUserName] = useState(null);


	//Crear funcion para setear orderEntries
	const addEntry = (product) => {
		product.quantity = 1;
		setOrderEntries([...orderEntries, product]); // setear un nuevo estado con lo que habia antes + en nuevo producto
	}
	//Funcion que setea orderId
	const addOrderId = (Id, Name) => {
		setOrderId(Id);
		setUserName(Name)
	}

	//Total price 
	const totalPrice = () => {
		let totalPrice = 0;
		orderEntries.forEach((orderEntry) => {
			totalPrice = orderEntry.price + totalPrice;
		})
		return totalPrice;
	}
	// Listener + a product
	const incrementProductQuantity = (product) => {
		return () => {
			const newOrderEntries = [];
			orderEntries.forEach((orderEntry) => {
				if (product.name === orderEntry.name) {
					const newQuantity = orderEntry.quantity + 1;
					newOrderEntries.push({ ...orderEntry, quantity: newQuantity })
				} else {
					newOrderEntries.push({ ...orderEntry })
				}
			})
			setOrderEntries(newOrderEntries);
		}
	}

	// Listener + decrease product
	const decreaseProductQuantity = (product) => {
		return () => {
			const newOrderEntries = [];
			orderEntries.forEach((orderEntry) => {
				if (product.name === orderEntry.name) {
					const newQuantity = orderEntry.quantity - 1;
					if (newQuantity > 0) {
						newOrderEntries.push({ ...orderEntry, quantity: newQuantity })
					}
				} else {
					newOrderEntries.push({ ...orderEntry })
				}
			})
			setOrderEntries(newOrderEntries);
		}
	}

	// Delete Button
	const deleteButton = (product) => {
		return () => {
			const newOrderEntries = [];
			orderEntries.forEach((orderEntry) => {
				if (orderEntry.name !== product.name) {
					newOrderEntries.push({ ...orderEntry })
				}
			})
			setOrderEntries(newOrderEntries);
		}

	}

	if (orderId == null) {
		return (
			<Container className={"user-container"}>
				<User addOrderId={addOrderId} />
			</Container>)
	}
	return (
		<Container className={"order-container"}>
			<Row >
				<Col>
					<Row>
						<div className={"order-display-name"}>
							<h1>Pedido de: {userName}</h1>
						</div>
					</Row>
					<Row>
						<ProductsSection orderEntries={orderEntries} addEntry={addEntry} />
					</Row>
				</Col>
			</Row>
			<Row >
				<Col className = {"display-products"}>
					<Row>
						<div>
							<Table striped bordered hover size="sm">
								<thead>
									<tr>
										<th>Cantidad</th>
										<th>Productos</th>
										<th>Precio</th>
										<th>Eliminar</th>
									</tr>
								</thead>
								<tbody>
									{
										orderEntries.map((orderEntry, index) => {
											return (
												<tr key={index}>
													<td>
														<ButtonGroup aria-label="Basic example">
															<Button onClick={decreaseProductQuantity(orderEntry)} variant="secondary">-</Button>
															<Button variant="secondary">{orderEntry.quantity}</Button>
															<Button onClick={incrementProductQuantity(orderEntry)} variant="secondary">+</Button>
														</ButtonGroup>
													</td>
													<td>{orderEntry.name}</td>
													<td>${orderEntry.price}</td>
													<td><button className={"delete-button"} onClick={deleteButton(orderEntry)}> <TrashFill/> </button></td>
												</tr>
											);
										})
									}
								</tbody>
							</Table>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Total:</th>
										<th>${totalPrice()}</th>
									</tr>
								</thead>
							</Table>
						</div>
					</Row>
					<Row>
						<div>
							<SendOrderToKitchen orderId={orderId} orderEntries={orderEntries} />
						</div>
					</Row>
				</Col>
			</Row>
		</Container>

	)
}

export default ClientOrder;