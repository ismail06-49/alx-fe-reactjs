import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Profile from './components/Profile'
import ProfileSettings from './components/ProfileSettings'
import ProfileDetails from './components/ProfileDetails'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Profile />} />
        <Route path='settings' element={<ProfileSettings />} />
        <Route path='details' element={<ProfileDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
