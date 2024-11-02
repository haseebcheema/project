import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/protected/ProtectedRoute';

function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/dashboard" element={<ProtectedRoute> <Dashboard/> </ProtectedRoute>} />
      </Routes>
    </Router>
  )
}

export default App
