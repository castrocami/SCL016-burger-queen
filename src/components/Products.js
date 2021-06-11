import { useState } from "react";
import { categories } from '../mockData/productsData'
import DisplayProducts from "./ProductsList";
import { Button, Row, Col } from 'react-bootstrap';

function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div className="App">
      <h1>Lista de productos</h1>
      <div>
        {categories.map((category) => {
          return (<Button onClick={() => { setSelectedCategory(category) }} className="btn btn-dark">{category}</Button>)
        })}
      </div>
      <Row>
        <Col>      <DisplayProducts
        selectedCategory={selectedCategory}
      /></Col>
      </Row>

    </div >
  );
}
export default ProductList;