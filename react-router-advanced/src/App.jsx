import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './components/Profile'
import BlogPost from "./BlogPost";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Profile />} />
        <Route path='/blog/:id' element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
