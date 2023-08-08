import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  async function loginUser(e) {
    e.preventDefault();

  }

  function updateEmail(e) {
    setEmail(e.target.value);
  }

  function updatePass(e) {
    setPass(e.target.value);
  }

  function updateRememberMe(e) {
    setRememberMe(e.target.checked);
  }

  return (
    <div className="card card-plain mt-6">
      <div className="card-header pb-0 text-left bg-transparent">
        <h3 className="font-weight-bolder text-info text-gradient">Welcome back</h3>
        <p className="mb-0">Enter your email and password to sign in</p>
      </div>
      <div className="card-body">
        <form role="form" onSubmit={loginUser}>
          <label>Email</label>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              id="email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <label>Password</label>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Password"
              id="pd"
              value={pass}
              onChange={updatePass}
            />
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={updateRememberMe}
            />
            <label className="form-check-label" for="rememberMe">Remember me</label>
          </div>
          <div className="text-center">
            <input
              type="submit"
              className="btn bg-gradient-info w-100 mt-4 mb-0"
              value="Sign In"
            />
          </div>
        </form>
      </div>
      <div className="card-footer text-center pt-0 px-lg-2 px-1">
        <p className="mb-4 text-sm mx-auto">
          Don't have an account?
          <a href="javascript:;" className="text-info text-gradient font-weight-bold">Sign up</a>
        </p>
      </div>
    </div>
  );
}