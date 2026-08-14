import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App