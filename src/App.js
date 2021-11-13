import react, {useEffect} from 'react'
import { Navbar, Home, Footer, Services, Product, Payment } from './components';
import { Switch, Route } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=>{
    AOS.init();
  },[]);
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}  />
        <Route exact path="/payment" component={Payment}  />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
