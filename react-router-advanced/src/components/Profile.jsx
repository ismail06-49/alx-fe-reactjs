import { Link, Route, Routes } from "react-router-dom";
import ProfileSettings from "./ProfileSettings";
import ProfileDetails from "./ProfileDetails";


export default function Profile() {

    return(
        <div>
            <h1> Profile </h1>
            <ul>
                <li><Link to='/settings' > Settings</Link></li>
                <li><Link to='/details' > Details</Link></li>
                <li><Link to='/blog/:id'>Post 1</Link></li>
                <li><Link to='/blog/:id'>Post 2</Link></li>
            </ul>
            <Routes>
                <Route path='/settings'>
                    <ProfileSettings />
                </Route>
                <Route path='/details'>
                    <ProfileDetails />
                </Route>
            </Routes>
        </div>
    )
}