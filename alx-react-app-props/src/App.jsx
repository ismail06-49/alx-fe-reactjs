import './App.css'
import { UserContext } from './UserContext';
import ProfilePage from './ProfilePage';

export default function App() {

  const userData = { name: "Jane Doe", email: "jane.doe@example.com" }
  
  return (

    <UserContext.Provider value={{userData}}>
      <ProfilePage />
    </UserContext.Provider>
  );
}
