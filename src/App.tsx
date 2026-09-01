import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Cat from './pages/Cat'

function App() {
  const [isDark, setIsDark] = useState(true)

  return (
    <div className={isDark ? 'app-wrapper dark' : 'app-wrapper'}>
      <main className={isDark ? 'app dark' : 'app'}>
        <button
          className="toggle"
          onClick={() => setIsDark(!isDark)}
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <Routes>
          <Route path="/" element={<Home isDark={isDark} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cat" element={<Cat />} />
        </Routes>
      </main>

      <footer className={isDark ? 'footer dark' : 'footer'}>
        <Link to="/contact" style={{ color: isDark ? '#0ea5e9' : '#0284c7', textDecoration: 'underline' }}>contact me</Link>
        <br></br>
        <Link to="/" style={{ color: isDark ? '#0ea5e9' : '#0284c7', textDecoration: 'underline' }}>home</Link>
      </footer>
    </div>
  )
}

export default App