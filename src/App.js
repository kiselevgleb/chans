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
import DrillBattery from './components/DrillBattery';
import LaptopBattery from './components/LaptopBattery';
import AirRespirator from './components/AirRespirator';
import BarcodeScanner from './components/BarcodeScanner';
import CableTester from './components/CableTester';
import DivePropulsion from './components/DivePropulsion';
import FlashSystem from './components/FlashSystem';
import LawnCareTool from './components/LawnCareTool';
import SpectrumAnalyzer from './components/SpectrumAnalyzer';
import SurveyInstrument from './components/SurveyInstrument';
import VacuumCleaner from './components/VacuumCleaner';
import OtherEquipment from './components/OtherEquipment';
// import Admin from 'netlify-cms';
// import Admin from 'netlify-cms-app'


function App(props) {
  const customHistory = createBrowserHistory();

  return (
    <>
      <Router history={customHistory}>
        <Switch>

          <Route path='/chans/build/contacts' component={Contacts} />
          <Route path='/chans/build/faq' component={Faq} />
          <Route path='/chans/build/warranty' component={Warranty} />
          <Route path='/chans/build/references' component={Reference} />
          <Route path='/chans/build/chans' component={Chans} />
          <Route path='/chans/build/blog' component={Blog} />
          <Route path='/chans/build/ebike-battery-rebuild' component={ElectricBikes} />
          <Route path='/chans/build/drill-battery-rebuild' component={DrillBattery} />
          <Route path='/chans/build/laptop-battery-rebuild' component={LaptopBattery} />
          <Route path='/chans/build/air-respirator-battery-rebuild' component={AirRespirator} />
          <Route path='/chans/build/barcode-scanner-battery-rebuild' component={BarcodeScanner} />
          <Route path='/chans/build/cable-tester-battery-rebuild' component={CableTester} />
          <Route path='/chans/build/dive-vehicle-battery-rebuild' component={DivePropulsion} />
          <Route path='/chans/build/flash-battery-rebuild' component={FlashSystem} />
          <Route path='/chans/build/lawn-care-battery-rebuild' component={LawnCareTool} />
          <Route path='/chans/build/spectrum-analyzer-battery-rebuild' component={SpectrumAnalyzer} />
          <Route path='/chans/build/survey-instrument-battery-rebuild' component={SurveyInstrument} />
          <Route path='/chans/build/vacuum-cleaners-battery-rebuild' component={VacuumCleaner} />
          <Route path='/chans/build/battery-rebuild' component={OtherEquipment} />
          <Route exact path='/' component={Main} />

          
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