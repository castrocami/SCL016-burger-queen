import "bootstrap/dist/css/bootstrap.min.css";
import { products } from '../mockData/productsData'
import { Button } from 'react-bootstrap';

function ProductsList({ selectedCategory, addEntry}) {
  const visibleProducts = products.filter(product => product.category.includes(selectedCategory));
  return (
    <div>
      {visibleProducts.map((product) => {
        return (<Button onClick = {()=>{addEntry(product)}} className="btn btn-dark"variant="primary" size="lg" block>{product.name}: ${product.price}</Button>)
      })}
    </div>
  )
}

export default ProductsList;