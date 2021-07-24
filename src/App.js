import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Read } from "./pages/Read";
import { Create } from "./pages/Create";
import { Nav } from "./components/Nav";

const Reflux = require("reflux");
const { Store } = require("./Store");
const { Actions } = require("./Store");

export default class App extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = Store;
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <Router>
          <Nav title={this.state.storeName} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home products={products} actions={Actions} />}
            />
            <Route exact path="/read/:id" component={Read} />
            <Route exact path="/create" component={Create} />
          </Switch>
        </Router>
      </div>
    );
  }
}
