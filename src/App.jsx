import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Todo from './compponents/Todo';
import Home from './compponents/Home';
import Navbar from './compponents/Navbar';

function App() {
  return (
    <div className="APP">
      <Router>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Todo" element={<Todo />} />

        </Routes>

      </Router>

    </div>

  );
}

export default App;
