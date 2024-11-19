import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Profile from './components/Profile'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
