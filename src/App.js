import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import Projects from "./screens/Projects/Projects";
import CV from "./screens/CV/CV";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/projects" component={Projects} />
      </Switch>
    </main>
  );
}

export default App;
