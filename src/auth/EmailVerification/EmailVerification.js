import "./EmailVerification.css";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import axios from "axios";

export const EmailVerification = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    let [loading, setLoading] = useState(true);

    async function verifyToken(token) {
        axios
            .get(`${process.env.REACT_APP_BACKEND_BASE_URL}/user/verify`,
            {
                params: {
                    token
                }
            })
            .then((res) => {
                console.log(res)
                setLoading(false)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    let token = searchParams.get('token')

    verifyToken(token)

    if (loading)
        return (<div>
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
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="blankLoader"><CircularProgress /></div>
        </div>)

    return (
        <div>
            Congratulations your email has been verified
        </div>
    )
}