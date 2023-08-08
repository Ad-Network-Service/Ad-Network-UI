import { Link } from "react-router-dom";
import "./Home.css"

export const Home = () => (
  <div>
    <div className="container-fluid position-sticky z-index-sticky top-0">
        <div className="row">
            <div className="col-12">
                <nav className="navbar navbar-expand-lg blur  top-0 z-index-3 shadow position-absolute  py-2 start-0 end-0 ">
                    <div className="container-fluid pe-0">
                        <Link to="/">
                            <span className="navbar-brand font-weight-bolder ms-lg-0 ms-3 ">
                                Partner Program
                            </span>
                        </Link>
                        
                        <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon mt-2">
                                <span className="navbar-toggler-bar bar1"></span>
                                <span className="navbar-toggler-bar bar2"></span>
                                <span className="navbar-toggler-bar bar3"></span>
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navigation">
                            <ul className="navbar-nav mx-auto ms-xl-auto me-xl-7">

                                {/* <li className="nav-item">
                                    <Link to="/register">
                                        <a className="nav-link me-2">
                                            <i className="fas fa-user-circle opacity-6 text-dark me-1"></i>
                                            Sign Up
                                        </a>
                                    </Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link to="/login">
                                        <span className="nav-link me-2">
                                            <i className="fas fa-key opacity-6 text-dark me-1"></i>
                                            Sign In
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    <section className="min-vh-100 mb-8">
      <div className="page-header align-items-center min-vh-100 pt-5 pb-11 " style={{ backgroundImage: "url('/Img/curved-images/curved14.jpg')" }}>
        <span className="mask bg-gradient-dark opacity-6"></span>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center mx-auto mt-5">
              <h1 className="text-white mb-2 mt-5">Welcome!</h1>
              <p className=" h1 text-white mb-5">Grow your business globally with strategic partnerships</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 text-end ">
              <Link to='/register'>
                <span className="btn btn-round btn-sm mb-0 btn-outline-white ">Join as an advertiser</span>
              </Link>
            </div>
            <div className="col-lg-6 text-start ">
              <Link to='/register'>
                <span className="btn btn-round btn-sm mb-0 btn-outline-white ">Join as a publisher</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
);