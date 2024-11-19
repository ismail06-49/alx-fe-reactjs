import { Route, useNavigate } from "react-router-dom";





export default function PrivateRoute({ component: Component, ...rest }) {

    const navigate = useNavigate();
    const useAuth = () => {
    return localStorage.getItem('authToken') !== null;
};

    <Route
        {...rest}
        render={props =>
            useAuth() ? (
                <Component {...props} />
            ) : (
                navigate("/")
            )
        }
    />
};

