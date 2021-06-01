import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Products from 'pages/Products';
import Services from 'pages/Services';
import SignUp from 'pages/SignUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
