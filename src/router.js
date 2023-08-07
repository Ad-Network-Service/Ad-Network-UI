import { Route, createBrowserRouter, createRoutesFromElements, defer } from "react-router-dom";
import { HomeLayout } from "./auth/HomeLayout";
import { ProtectedLayout } from "./auth/ProtectedLayout";
import { AuthLayout } from "./auth//AuthLayout";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { VerifyEmail } from "./components/VerifyEmail/VerifyEmail";

const getUserData = () => 
  new Promise((resolve) => 
    setTimeout(() => {
      const user = window.localStorage.getItem("user");
      resolve(user);
    }, 3000)
  );

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route 
        element={<AuthLayout /> }
        loader={() => defer({ userPromise: getUserData() })}
      >
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Route>

        <Route path="/dashboard" element={<ProtectedLayout />} />
      </Route>
    </>
  )
)