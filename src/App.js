import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/tabs/Home";
import { Activities } from "./components/tabs/Activities";
import { Jokes } from "./components/tabs/Jokes";
import { Memes } from "./components/tabs/Memes";
import { Dogs } from "./components/tabs/Dogs";
import { Names } from "./components/tabs/Names";
import { Game } from "./components/tabs/Game";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="tabs">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/activities" component={Activities} />
            <Route exact path="/jokes" component={Jokes} />
            <Route exact path="/memes" component={Memes} />
            <Route exact path="/dogs" component={Dogs} />
            <Route exact path="/names" component={Names} />
            <Route exact path="/game" component={Game} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
