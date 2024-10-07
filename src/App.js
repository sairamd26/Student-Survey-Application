
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import List from './list';
import Navigation from './navbar';

import Form from './form';
import Update from './update';

function App() {
  return (
    <div >
      <header >
        
      </header>
    
    <div>
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/survey-form" element={<Form />} />
        <Route path="/survey-list" element={<List />} />
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
    </Router>
     
    </div>
    </div>
    
  );
}
export default App;
