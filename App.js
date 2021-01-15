import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./component/Dashboard.jsx";
function App() {
  return (
    <div className="App">
      <Router>
      <Route to="/dashBoard" component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;
