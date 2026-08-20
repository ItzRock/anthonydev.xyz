import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <main className={isDark ? 'app dark' : 'app'}>
      <button
        className="toggle"
        onClick={() => setIsDark(!isDark)}
        aria-label="Toggle dark mode"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className="content">
        <p>yo whats good</p>

        {isDark && <p>who turned off the lights</p>}
      </div>
    </main>
  )
}

export default App