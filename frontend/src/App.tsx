import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './views/pages/login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App