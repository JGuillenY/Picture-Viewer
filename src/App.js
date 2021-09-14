import logo from "./logo.svg";
import "./App.css";
import { storageFire } from "./config/Firebase";
import React from "react";

function App() {
  React.useEffect(() => {
    const root = storageFire.ref().child("/home/raul");

    root
      .listAll()
      .then((res) => {
        res.prefixes.forEach((elemento) => {
          console.log("elemento", elemento);
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Prueba del firebase</p>
      </header>
    </div>
  );
}

export default App;
