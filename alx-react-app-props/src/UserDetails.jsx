import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function UserDetails() {

    const userData = useContext(UserContext)
    console.log(userData);
    

    return (
        <div>
            <p>Name: {userData.userData.name}</p>
            <p>Email: {userData.userData.email}</p>
        </div>
    );
}
