import "bootstrap/dist/css/bootstrap.min.css"
import firebase from "firebase/app"
import { useState } from "react";
import { Button } from 'react-bootstrap';

function User({addOrderId}) {
  const [userName, setUserName] = useState(null);
  return (
    <div className="App">
      <main>
        <div>
          <input onChange={event => setUserName(event.target.value)} type="text" placeholder="Nombre de cliente"></input>
          <Button className="btn-group-toggle" onClick={sendName(userName, addOrderId)}>Check</Button>
        </div>
      </main>
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
        addOrderId(docRef.id);
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
}

