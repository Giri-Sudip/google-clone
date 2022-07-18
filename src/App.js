import React from "react";
import './App.css';
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
// import Search from './pages/Search'

import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

// In react router dom switch is replaced is Routes.
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
