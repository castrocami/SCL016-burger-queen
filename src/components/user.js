import "bootstrap/dist/css/bootstrap.min.css"

// import "firebase/firestore";

function User() {
    const name = "Paola";
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
        <form>
        <input type="text" placeholder="Nombre de cliente"></input>
        <button className="btn-group-toggle" type="submit">Check</button>
        </form>
    </main>
  
        
      </div>
    );
  }
  
  export default User;
  