import "bootstrap/dist/css/bootstrap.min.css"
import firebase from "firebase/app"
import { useState } from "react";

function User() {
  const [userName, setUserName] = useState(null);
  return (
    <div className="App">
      <header>
      </header>
      <main>
        <h1>
          Justa Panaderia
        </h1>
        <h3>
          Toma Pedidos
        </h3>
        <div>
          <input onChange={event => setUserName(event.target.value)} type="text" placeholder="Nombre de cliente"></input>
          <button className="btn-group-toggle" onClick={sendName(userName)}>Check</button>
        </div>
      </main>


    </div>
  );
}

export default User;

const sendName = (userName) => {
  return () => {
  const db = firebase.firestore();
  // Add a new document with a generated id.
  db.collection("orders").add({
    name: userName,
    order: "pan"
  })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }
}
