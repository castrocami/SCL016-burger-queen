import "bootstrap/dist/css/bootstrap.min.css";
import { products } from '../mockData/productsData'
import { Button } from 'react-bootstrap';

function ProductsList({ selectedCategory, addEntry, orderEntries}) {
  const visibleProducts = products.filter(product => product.category.includes(selectedCategory));
  return (
    <div>
      {visibleProducts.map((product, index) => {
        return (<Button key={index} disabled = {checkProductInOrderEntries(product.name, orderEntries)}  onClick = {()=>{addEntry(product)}} className="btn btn-dark"variant="primary" size="lg" block>{product.name}: ${product.price}</Button>)
      })}
    </div>
  )
}

export default ProductsList;

/**
 * 
 * @param {string} productName 
 * @returns {boleean} Return true if the product is in orderEntries, false if is not 
 */
const checkProductInOrderEntries = (productName, orderEntries) => {
  for (let i = 0; i< orderEntries.length; i++){
    if(productName === orderEntries[i].name){
      return true;
    }
  }
  return false;
}