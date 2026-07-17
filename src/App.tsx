import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Portal from './pages/Portal'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portal" element={<Portal />} />
      </Routes>
    </HashRouter>
  )
}

export default App
