import './App.css';
import Navbar from './components/Navbar.js';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './components/Pages/Home';
import { About } from './components/Pages/About';
import { Experience } from './components/Pages/Experience';
import { Contact } from './components/Pages/Contact';
import { Projects } from './components/Pages/Projects';

function App() {
  return (
    <div className="App">
      <Router forceRefresh={true}>
        <Navbar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/experience" component={Experience} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
