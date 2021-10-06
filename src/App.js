import react from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./pages/About";
import CocktailList from "./components/CocktailList";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}>
        </Route>
        <Route exact path="/about" component={About}>
        </Route>
        <Route exact path="/cocktail/:id">
          <CocktailList/>
        </Route>
        <Route exact path="*">
          <Error/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
