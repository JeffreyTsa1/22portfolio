import { Routes, Route } from 'react-router-dom'
import './App.css';
import About from './components/About'
import Work from './components/Work'
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Navbar />
        <Routes>
          <Route path="/" element = { 
            <About /> 
          }/>
          {/* <Route path="/" element = { 
            <About /> 
          }/> */}
          <Route path="/work" element = {
            <Work />
          }/>
          <Route path="/hourglass" />
          <Route path="/requestForm" />
          <Route path="/treetab" />
        </Routes>
      </header>
    </div>
  );
}

export default App;
