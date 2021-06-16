import "bootstrap/dist/css/bootstrap.min.css";
// import firebase from "firebase/app"
import { Button } from 'react-bootstrap';
import firebase from "firebase/app"

function SendOrderToKitchen({orderId}) {
    return (
        <div>
            <Button onClick = {sendOrder(orderId)} >Enviar a Cocina</Button>
        </div>
    )
}

export default SendOrderToKitchen;



const sendOrder = (orderId) => {
    return () =>{
        const db = firebase.firestore();
        var sendingOrder = db.collection("orders").doc();
        // Set the "capital" field of the city 'DC'
        return sendingOrder.update({
          Products: [{ product: "Pan de canela", price: 2400, quantity: 1 }, { product: "Trenza de chocolate", price: 2400, quantity: 1 }]
        })
          .then(() => {
            console.log("Document successfully updated!");
          })
          .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });
    }

  } 
  
