import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ContatoForms from './components/ContatoForms/ContatoForms';
import BuscaDrinkApi from './components/Api/BuscaDrinkApi';
import NossoTime from './components/NossoTime/NossoTime';
import SobreNos from './components/SobreNos/SobreNos'

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Header />

          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/drinks">
              <BuscaDrinkApi />
            </Route>

            <Route path="/sobre-nos">
              <SobreNos />
            </Route>

            <Route path="/nosso-time">
              <NossoTime />
            </Route>


            <Route path="/contato">
              <ContatoForms />
            </Route>

          </Switch>

          <Footer />

      </BrowserRouter>      
    </div>
  );
}

export default App;
