import { useContext } from 'react';
import './App.css'
import { UserContext } from './context/UserContext';
import ProfilePage from './ProfilePage';

export default function App() {

  const userData = useContext(UserContext)
  console.log(userData);
  
  return (

    <UserContext.Provider value={{userData}}>
      <ProfilePage />
    </UserContext.Provider>
  );
}
