import Header from "./components/Header/Header";
import Main from "./components/Main";
import Nosotros from "./components/Nosotros";
import Servicios from "./components/Servicios";
import Noticias from "./components/Noticias";

import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound"; 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = () => {
  return (
    <>
    
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/nosotros" component={Nosotros}/>
          <Route exact path="/servicios" component={Servicios}/>
          <Route exact path="/noticias" component={Noticias}/>
          <Route component={PageNotFound} />
        </Switch>
      </Router>
      
      <Footer />
    </>
  );
};

export default App;
