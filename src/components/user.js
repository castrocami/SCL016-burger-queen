import "bootstrap/dist/css/bootstrap.min.css"
import firebase from "firebase/app"
import { useState } from "react";
import { Button, Row} from 'react-bootstrap';
import './User.css'

function User({addOrderId}) {
  const [userName, setUserName] = useState(null);
return (
      <div className={`content-user justify-content-md-center`}>
        <Row>
          <h1>Toma de pedidos</h1>
        </Row>
        <Row>
          <input  className="input-client" onChange={event => setUserName(event.target.value)} type="text" placeholder="Nombre de cliente"></input>
        </Row>
        <Row>
          <Button className="btn-group-toggle" onClick={sendName(userName, addOrderId)}>Entrar</Button>
        </Row>
      </div>
  );
}

export default User;

const sendName = (userName, addOrderId) => {
  return () => {
    const db = firebase.firestore();
    // Add a new document with a generated id.
    db.collection("orders").add({
      name: userName,
    })
      .then((docRef) => {
        addOrderId(docRef.id, userName);
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
}

