import { Router } from "@reach/router";
import './App.css';
import Main from "./views/Main";
import ViewProduct from "./components/ViewProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Main default path="/products"/>
        <ViewProduct path="/products/:id"/>
      </Router>
    </div>
  );
}

export default App;
