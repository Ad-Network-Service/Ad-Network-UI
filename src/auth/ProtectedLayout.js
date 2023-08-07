import { Link, Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "./AuthProvider"

export const ProtectedLayout = () => {
    const { user } = useAuth();
    const outlet = useOutlet();

    if(!user) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            {outlet}
        </div>
    )
}