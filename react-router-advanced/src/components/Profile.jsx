import { Link } from "react-router-dom";


export default function Profile() {

    return(
        <div>
            <h1> Profile </h1>
            <ul>
                <li><Link to='/settings' > Settings</Link></li>
                <li><Link to='/details' > Details</Link></li>
            </ul>
        </div>
    )
}