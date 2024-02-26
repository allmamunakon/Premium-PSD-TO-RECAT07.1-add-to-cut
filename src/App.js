import logo from './logo.svg';
import './App.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import UseStage from './Components/UseState/UseStage';

import MovieDisplay from './Components/UseState/MovieDisplay';
import Nayoks from './Components/UseState/Nayoks';
import Api from './Components/UseState/Api';
// import EmaJon from './Components/UseState/EmaJon/EmaJon';
import Header from './Components/EmaJon/Header';
import Shop from './Components/EmaJon/Shop';








function App() {
  
  return (
    <div className="App container">
      <header className="App-header">
       
       <Header />
       <Shop />
       <UseStage/>
       <MovieDisplay />
        <Nayoks /> 
       <Api />
       {/* <EmaJon/> */}

     
  
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
        <img src={logo} className="App-logo" alt="logo" />
        <p className='bg-info' style={{marginLeft:'30px'}}>
       
        < FontAwesomeIcon icon={faFacebook} spinPulse size="2xl" style={{color: "#e23f22" }} />
        Edit <code>src/App.js </code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
