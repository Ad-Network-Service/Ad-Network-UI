import axios from "axios";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useLocalStorage } from "../../auth/useLocalStorage";
import NotificationContext from "../../services/NotificationService/NotificationContext";

export default function VerifyEmail() {
  const [storeEmail, setStoreEmail] = useLocalStorage('email', null)
  const notification = useContext(NotificationContext);

  async function resendEmail(e) {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_BASE_URL}/user/resend-token`, {
        "email": storeEmail
      })
      .then((response) => {
        notification.success('Another verification email has been sent to your email.', true);
        console.info(response)
      })
      .catch((err) => {
        notification.error('Some Error Occured. Please try again after some time.', true);
        console.error(err)
      });
  }
  if(storeEmail)
  return (
    <div className="card card-plain mt-6">
      <div className="card-header pb-0 text-left bg-transparent">
        <h3 className="font-weight-bolder text-info text-gradient">Verify your Email!</h3>
        <p className="mb-0">A verification email has been sent to your email. Please check your inbox.</p>
      </div>
      <div className="card-body">
        <form role="form" onSubmit={resendEmail}>
          <div className="text-center">
            <input
              type="submit"
              className="btn bg-gradient-info w-100 mt-4 mb-0"
              value="Resend Mail"
            />
          </div>
        </form>
      </div>
    </div>
  );
  else 
  return (<Navigate to="/" replace={true} />)
}
