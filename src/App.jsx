import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Mission from './pages/Mission'
import Branches from './pages/Branches'
import Clubs from './pages/Clubs'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App