import { useState } from "react";
import { categories } from '../mockData/productsData'
import ProductsList from "./productsList";
import { Button, Row, Col } from 'react-bootstrap';
import './ProductsSection.css'

function ProductsSection({addEntry, orderEntries}) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div className="App">
      <h1>Lista de productos</h1>
      <div className={"category-products"}>
        {categories.map((category,index) => {
          return (<Button key={index} onClick={() => { setSelectedCategory(category) }} className="btn btn-dark">{category}</Button>)
        })}
      </div>
      <Row>
        <Col>      
          <ProductsList  orderEntries = {orderEntries} selectedCategory={selectedCategory} addEntry={addEntry}/>
        </Col>
      </Row>

    </div >
  );
}
export default ProductsSection;