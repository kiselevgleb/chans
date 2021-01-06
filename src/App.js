import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Main from './components/Main';
import Contacts from './components/Contacts';
import Faq from './components/Faq';
import Reference from './components/Reference';
import Order from './components/Order';
import Error404 from './components/Error404';

function App(props) {
  const customHistory = createBrowserHistory();

  return (
    <>
      <Router history={customHistory}>
        <Switch>

          <Route path='/chans/build/contacts' component={Contacts} />
          <Route path='/chans/build/faq' component={Faq} />
          <Route path='/chans/build/references' component={Reference} />
          <Route exact path='/chans/build/' component={Main} />
          <Route path='/chans/build/' component={Error404} />

          {/* <Route exact path='/' component={Main} />
          <Route exact path='/contacts' component={Contacts} />
          <Route exact path='/faq' component={Faq} />
          <Route exact path='/reference' component={Reference} />
          <Route path='/' component={Error404} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;