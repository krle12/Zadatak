import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import  Form  from './views/Form';

export const App = () => {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Form} />
      </Switch>
    </Router>
    
  );
}

export default App;

