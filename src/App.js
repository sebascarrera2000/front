import './App.css';
//import SideNav  from './components/SideNav';
//import Dispatch  from './pages/dispatch/dispatch';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


/* These lines are importing two components, `MainPage` and `dispatch`, from their respective files
located in the `./components/home/inicio` and `./components/dispatch` directories. These components
are then used in the `Route` components in the `App` function to render the appropriate component
when the corresponding URL path is accessed. */
import MainPage from './components/home/inicio';
import dispatch from './components/dispatch';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/dispatch">Otra página</Link>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={MainPage} />
        <Route path="/dispatch" component={dispatch} />
      </div>
    </Router>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;

