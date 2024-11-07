import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function UserDetails() {

    const userData = useContext(UserContext)

    return (
        <div>
            <p>Name: {userData.userData.name}</p>
            <p>Email: {userData.userData.email}</p>
        </div>
    );
}
