import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './components/Profile'
import BlogPost from "./BlogPost";
import './App.css'
import PrivateRoute from './components/ProtectedRoute';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <PrivateRoute path='/blog/:id' component={BlogPost} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
