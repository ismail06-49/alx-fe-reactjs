import { useContext } from 'react';
import './App.css'
import { UserContext } from './UserContext';
import ProfilePage from './ProfilePage';

export default function App() {

  const userData = useContext(UserContext)
  
  return (

    <UserContext.Provider value={{userData}}>
      <ProfilePage />
    </UserContext.Provider>
  );
}
