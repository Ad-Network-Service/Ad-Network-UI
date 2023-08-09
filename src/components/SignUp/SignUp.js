import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../auth/useLocalStorage";

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [cPass, setCPass] = useState('');
  const [terms, setTerms] = useState(false);
  const [storeEmail, setStoreEmail] = useLocalStorage('email', null)
  const navigate = useNavigate();

  function updateEmail(e) {
    setEmail(e.target.value);
  }

  function updatePass(e) {
    setPass(e.target.value);
  }

  function updateCPass(e) {
    setCPass(e.target.value);
  }

  function updateTerms(e) {
    setTerms(e.target.checked);
  }

  async function registerUser(e) {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_BASE_URL}/user/signup`, {
        "email": email,
        "password": pass
      })
      .then((response) => {
        setStoreEmail(email);
        navigate('/verify-email');
      });
  }

  return (
    <div className="card card-plain mt-6">
      <div className="card-header pb-0 text-left bg-transparent">
        <h3 className="font-weight-bolder text-info text-gradient">Welcome!</h3>
        <p className="mb-0">Please enter your email and password to register with us</p>
      </div>
      <div className="card-body">
        <form role="form" onSubmit={registerUser}>
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
              type="password"
              className="form-control"
              placeholder="Password"
              id="pd"
              value={pass}
              onChange={updatePass}
            />
          </div>
          <label>Confirm Password</label>
          <div className="mb-3">
            <input 
              type="password" 
              className="form-control" 
              id="cpd" 
              placeholder="Confirm Password" 
              value={cPass}
              onChange={updateCPass}
            />
          </div>
          <div className="form-check form-switch">
            <input 
              className="form-check-input" 
              type="checkbox" 
              id="flexCheckDefault"
              checked={terms}
              onChange={updateTerms}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              I agree the Terms and Conditions
            </label>
          </div>
          <div className="text-center">
            <input
              type="submit"
              className="btn bg-gradient-info w-100 mt-4 mb-0"
              value="Register"
            />
          </div>
        </form>
      </div>
      <div className="card-footer text-center pt-0 px-lg-2 px-1">
        <p className="mb-4 text-sm mx-auto">
          Already have an account? 
          <Link to="/login" className="text-info text-gradient font-weight-bold"> Sign in </Link>
        </p>
      </div>
    </div>
  );
}