import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function UserDetails() {

    const {userData} = useContext(UserContext)

    return (
        <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
}
