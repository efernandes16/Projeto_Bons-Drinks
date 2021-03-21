import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Button from './components/Button/Button';
import Forms from './components/Formulario/Forms';

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
              <h1>Rota de Drinks</h1>
            </Route>

            <Route path="/sobre-nos">
              <h1>Rota Sobre Nós</h1>
            </Route>

            <Route path="/nosso-time">
              <h1>Rota Nosso Time</h1>
            </Route>


            <Route path="/contato">
              <Forms />
              <h1>Rota de contato</h1>
            </Route>

          </Switch>

          <Footer />

      </BrowserRouter>      
    </div>
  );
}

export default App;
