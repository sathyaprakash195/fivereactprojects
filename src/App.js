
import './App.css';
import "antd/dist/antd.css";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from './Home';
import Tables from './Tables';
import Forms from './Forms';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Route path='/' exact component={Home}/>
          <Route path='/tables' exact component={Tables}/>
          <Route path='/forms' exact component={Forms}/>
       </BrowserRouter>
    </div>
  );
}

export default App;
