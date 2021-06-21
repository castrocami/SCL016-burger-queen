import { useState } from "react";
import { categories } from '../mockData/productsData'
import ProductsList from "./ProductsList";
import { Button, Row, Col } from 'react-bootstrap';

function ProductsSection({addEntry}) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div className="App">
      <h1>Lista de productos</h1>
      <div>
        {categories.map((category,index) => {
          return (<Button key={index} onClick={() => { setSelectedCategory(category) }} className="btn btn-dark">{category}</Button>)
        })}
      </div>
      <Row>
        <Col>      
          <ProductsList selectedCategory={selectedCategory} addEntry={addEntry}/>
        </Col>
      </Row>

    </div >
  );
}
export default ProductsSection;