import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Main from './components/Main';
import Contacts from './components/Contacts';
import Faq from './components/Faq';
import Reference from './components/Reference';
import Error404 from './components/Error404';
import Warranty from './components/Warranty';
import Chans from './components/Story';
import Blog from './components/Blog';
import ElectricBikes from './components/ElectricBikes';

function App(props) {
  const customHistory = createBrowserHistory();

  return (
    <>
      <Router history={customHistory}>
        <Switch>
         <Route path='/contacts' component={Contacts} />
          <Route path='/faq' component={Faq} />
          <Route path='/warranty' component={Warranty} />
          <Route path='/references' component={Reference} />
          <Route path='/chans' component={Chans} />
          <Route path='/blog' component={Blog} />
          <Route path='/battery-rebuild' component={ElectricBikes} />
          <Route exact path='/' component={Main} />
          <Route path='/' component={Error404} />
        </Switch>
      </Router>
    </>
  );
}

export default App;