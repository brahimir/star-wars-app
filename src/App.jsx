import "./App.scss";
// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Nav from "./app/components/layout/Navigation";
import Home from "./app/pages/Home";
import About from "./app/pages/About";
import List from "./app/pages/List/List";
import CharacterDetails from "./app/pages/CharacterDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/list" exact component={List} />
          <Route path="/details:id" exact component={CharacterDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
