import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './views/pages/login'
import Dashboard from './views/pages/dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App