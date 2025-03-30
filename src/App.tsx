import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';
import { StrictMode } from 'react';
import { useState } from 'react';
import {User } from "./Types"
import LandingPage from './LandingPage';
function App() {

  const [users, setUsers] = useState<User[]>([]);

  return (
    <StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<Login users={users} setUsers={setUsers} />} />
          <Route path="/signup" element={<Signup users={users} setUsers={setUsers} />} />
          <Route path="/dashboard" element={<Dashboard users={users} setUsers={setUsers} />} />
        </Routes>
      </Router>
    </StrictMode>
  );
}

export default App;
