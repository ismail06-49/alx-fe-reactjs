import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './components/Profile'
import BlogPost from "./BlogPost";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Profile />} />
        <Route path='/post/:postId' element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
