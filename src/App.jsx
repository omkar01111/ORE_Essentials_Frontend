
import './App.css'
import {BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {


  return (
    <>
    <Header/>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
     </Router>
     <Footer/>
    </>
  )
}

export default App
