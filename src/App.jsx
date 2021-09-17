import TestWindow from "./Components/TestWindow/TestWindow";
import ResultWindow from "./Components/ResultWindow/ResultWindow";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Auth from "./Components/Auth/Auth";

function App() {
  return (
    
    <Router className="App">
      <Route exact path="/test" component={TestWindow}/>
      <Route path="/result" component={ResultWindow}/>
      <Route path="/auth" component={Auth}/>
    </Router>
  );
}

export default App;
