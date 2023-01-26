import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Landing from "./components/Landing/Landing.jsx";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import PostDog from "./components/PostDog/PostDog";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/:id" component={Detail} />
          <Route exact path="/create" component={PostDog} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
