import React from "react";
 class Header extends React.Component {

    render(){
        return(
        <div className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
            <a className="navbar-brand" href="#"> ALFARES</a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                      <a className="nav-link" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">Services</a>
                 </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">Contact</a>
                  </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input type="text" className="form-control mr-sm-2" placeholder="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
              </form>
            </div>
        </div>
        )
    }
 }

 export default Header;
