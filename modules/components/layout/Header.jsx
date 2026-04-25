import React from 'react'

const Header = () => {
  return (
  <header className="header-with-topbar">
  {/* start header top bar */}
  <div className="header-top-bar top-bar-dark bg-very-light-gray">
    <div className="container-fluid">
      <div className="row h-45px xs-h-auto align-items-center m-0 xs-pt-5px xs-pb-5px">
        <div className="col-lg-6 col-md-7 text-center text-md-start xs-px-0">
          <div className="fs-15 text-dark-gray fw-500">
            Our accounting experts waiting for you!{" "}
            <a
              href="demo-accounting-contact.html"
              className="text-dark-gray text-decoration-line-bottom fw-600"
            >
              Contact now
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-5 text-end d-none d-md-flex">
          <div className="widget fs-15 fw-500 me-35px lg-me-25px md-me-0 text-dark-gray">
            <a href="tel:02228899900">
              <i className="feather icon-feather-phone-call" />
              0222 8899900
            </a>
          </div>
          <div className="widget fs-15 fw-500 text-dark-gray d-none d-lg-inline-block">
            <i className="feather icon-feather-map-pin" />
            Broadway, 24th Floor, San Francisco
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end header top bar */}
  {/* start navigation */}
  <nav className="navbar navbar-expand-lg header-light bg-white responsive-sticky">
    <div className="container-fluid">
      <div className="col-auto col-lg-2 me-lg-0 me-auto">
        <a className="navbar-brand" href="demo-accounting.html">
          <img
            src="images/demo-accounting-logo-black.png"
            data-at2x="images/demo-accounting-logo-black@2x.png"
            alt=""
            className="default-logo"
          />
          <img
            src="images/demo-accounting-logo-black.png"
            data-at2x="images/demo-accounting-logo-black@2x.png"
            alt=""
            className="alt-logo"
          />
          <img
            src="images/demo-accounting-logo-black.png"
            data-at2x="images/demo-accounting-logo-black@2x.png"
            alt=""
            className="mobile-logo"
          />
        </a>
      </div>
      <div className="col-auto menu-order position-static">
        <button
          className="navbar-toggler float-start"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-line" />
          <span className="navbar-toggler-line" />
          <span className="navbar-toggler-line" />
          <span className="navbar-toggler-line" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav fw-600">
            <li className="nav-item">
              <a href="demo-accounting.html" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="demo-accounting-company.html" className="nav-link">
                Company
              </a>
            </li>
            <li className="nav-item dropdown dropdown-with-icon-style02">
              <a href="demo-accounting-services.html" className="nav-link">
                Services
              </a>
              <i
                className="fa-solid fa-angle-down dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a href="demo-accounting-services-details.html">
                    <img
                      src="images/demo-accounting-company-icon02.svg"
                      alt=""
                    />
                    Corporate finance
                  </a>
                </li>
                <li>
                  <a href="demo-accounting-services-details.html">
                    <img
                      src="images/demo-accounting-company-icon03.svg"
                      alt=""
                    />
                    Financial services
                  </a>
                </li>
                <li>
                  <a href="demo-accounting-services-details.html">
                    <img
                      src="images/demo-accounting-company-icon-04.svg"
                      alt=""
                    />
                    Online consulting
                  </a>
                </li>
                <li>
                  <a href="demo-accounting-services-details.html">
                    <img
                      src="images/demo-accounting-company-icon-05.svg"
                      alt=""
                    />
                    Investment consulting
                  </a>
                </li>
                <li>
                  <a href="demo-accounting-services-details.html">
                    <img
                      src="images/demo-accounting-company-icon-06.svg"
                      alt=""
                    />
                    Banking and financing
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="demo-accounting-process.html" className="nav-link">
                Process
              </a>
            </li>
            <li className="nav-item">
              <a href="demo-accounting-news.html" className="nav-link">
                News
              </a>
            </li>
            <li className="nav-item">
              <a href="demo-accounting-contact.html" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-auto col-lg-2 text-end d-none d-sm-flex">
        <div className="header-icon">
          <div className="header-button">
            <a
              href="demo-accounting-contact.html"
              className="btn btn-small btn-rounded btn-base-color btn-box-shadow"
            >
              Let's discuss
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  {/* end navigation */}
</header>

  )
}

export default Header