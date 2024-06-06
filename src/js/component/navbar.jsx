import React from "react";

const navbar = () => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    <nav className="navbar navbar-expand-lg navbar-white bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div className="d-flex" role="search">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-secondary" aria-disabled="true">About</a>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled text-secondary" aria-disabled="true">Services</a>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled text-secondary" aria-disabled="true">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </div>

  )
}
export default navbar;