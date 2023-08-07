import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export const HomeLayout = () => {
    const { user } = useAuth();

    if (user) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}