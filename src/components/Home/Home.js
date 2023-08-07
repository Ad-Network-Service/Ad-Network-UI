import "./Home.css"

export const HomePage = () => (
    <div>
     
     <div class="container-fluid position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
       
        <nav class="navbar navbar-expand-lg blur  top-0 z-index-3 shadow position-absolute  py-2 start-0 end-0 ">
          <div class="container-fluid pe-0">
            <a class="navbar-brand font-weight-bolder ms-lg-0 ms-3 " href="../pages/dashboard.html">
              Soft UI Dashboard
            </a>
            <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon mt-2">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
              </span>
            </button>
            <div class="collapse navbar-collapse" id="navigation">
              <ul class="navbar-nav mx-auto ms-xl-auto me-xl-7">
               
                <li class="nav-item">
                  <a class="nav-link me-2" href="/signup">
                    <i class="fas fa-user-circle opacity-6 text-dark me-1"></i>
                    Sign Up
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link me-2" href="/login">
                    <i class="fas fa-key opacity-6 text-dark me-1"></i>
                    Sign In
                  </a>
                </li>
              </ul>
              
             
            </div>
          </div>
        </nav>
       
      </div>
    </div>
  </div>

  <section class="min-vh-100 mb-8">
    <div className="page-header align-items-center min-vh-100 pt-5 pb-11 " style={{backgroundImage: "url('/Img/curved-images/curved14.jpg')"}}>
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 text-center mx-auto mt-5">
            <h1 class="text-white mb-2 mt-5">Welcome!</h1>
            <p class=" h1 text-white mb-5">Grow your business globally with strategic partnerships</p>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-6 text-end ">
            <a class="btn btn-round btn-sm mb-0 btn-outline-white " target="_blank" href="#">Join as an advertiser</a>
          </div>
          <div class="col-lg-6 text-start ">
            <a class="btn btn-round btn-sm mb-0 btn-outline-white " target="_blank" href="#">Join as a publisher</a>
          </div>
        </div>
      </div>
    </div>
    
  </section>
    </div>
  );