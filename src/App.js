import logo from "./assets/media/logos/logo.svg";
import "./assets/sass/App.scss";
// Components
import Nav from "./app/components/layout/Navigation";
import Home from "./app/pages/Home";
import List from "./app/pages/List";
import About from "./app/pages/About";
// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/list" component={List} />
      </Router>
    </div>
  );
}

export default App;
