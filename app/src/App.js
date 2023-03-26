import logo from './logo.svg';
import './App.css';

function App() {
  const updateGraph = () => {
    console.log("clicked");
  }

  return (
    <div className="App">
      <div className="Top">
        <input id="tinput" type="text" placeholder="Business Unit"/>
        <input id="tinput" type="text" placeholder="Product Family"/>
        <button id="but" onClick={updateGraph}>COMPUTE</button>
        <input id="tinput" type="text" placeholder="Product ID"/>
        <input id="tinput" type="text" placeholder="Boooking Date"/>
      </div>
      <div className="Bottom">

      </div>
    </div>
  );
}

export default App;
