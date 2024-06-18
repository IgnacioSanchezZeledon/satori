import HomePage from './pages/HomePage.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="flex flex-col">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lander" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
