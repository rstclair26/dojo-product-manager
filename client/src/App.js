import { Router } from "@reach/router";
import './App.css';
import Main from "./views/Main";
import ViewProduct from "./components/ViewProduct";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Main default path="/products"/>
        <ViewProduct path="/products/:id"/>
        <UpdateProduct path="/products/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
