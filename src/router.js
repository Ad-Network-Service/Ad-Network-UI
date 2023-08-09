import { Route, createBrowserRouter, createRoutesFromElements, defer } from "react-router-dom";
import { HomeLayout } from "./auth/HomeLayout";
import { ProtectedLayout } from "./auth/ProtectedLayout";
import { AuthLayer } from "./auth/AuthLayer";
import { Home } from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import VerifyEmail from "./components/VerifyEmail/VerifyEmail";
import AuthLayout from "./components/AuthLayout/AuthLayout";
import { EmailVerification } from "./auth/EmailVerification/EmailVerification";
import Main from "./components/DashBoard/Main/Main"

const getUserData = () => 
  new Promise((resolve) => 
    setTimeout(() => {
      const user = window.localStorage.getItem("user");
      resolve(user);
    }, 1000)
  );

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route 
        element={<AuthLayer /> }
        loader={() => defer({ userPromise: getUserData() })}
      >
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
          </Route>
        </Route>

        <Route path="/verify" element={<EmailVerification />} />

        {/* <Route path="/dashboard" element={<ProtectedLayout />} /> */}
        
        <Route path="/dashboard" element={<Main />} />
      </Route>
    </>
  )
)