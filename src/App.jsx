import TestWindow from "./Components/TestWindow/TestWindow";
import ResultWindow from "./Components/ResultWindow/ResultWindow";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    
    <Router className="App">
      <Route exact path="/" component={TestWindow}/>
      <Route path="/result" component={ResultWindow}/>
    </Router>
  );
}

export default App;
