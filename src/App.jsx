import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MyRoutes from './routes/MyRoutes';
import Register from './Register';
import "./App.css"

// https://66dc75f947d749b72acba2b3.mockapi.io/users/names

function App() {
  const user = localStorage.getItem("ThirukkuralLogin");
  return (
    <Router>
      {user ? <MyRoutes /> : <Register />}
    </Router>
  );
}

export default App;
