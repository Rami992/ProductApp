import React from "react";
import "./style.css"

class Footer extends React.Component{
    renderfooter=()=>{
        return(
            <div>
                <div className="d-flex justify-content-between align-content-center my-3 mx-4">
                    <h4 className="d-inline mr-auto">Subscribe for email and get 12% off</h4>
                    <form className="form-inline my-2 my-lg-0 d-inline ml-auto">
                        <input type="text" className="form-control rounded-left" placeholder="Your Email" />
                        <button className="btn btn-outline-success my-2 my-sm-0  rounded-right">SubScribe</button>
                   </form>
                </div>
                <div className="d-flex justify-content-around my-3">
                    <div>
                        <h4>Company Info</h4>
                        <ul className="list-unstyled">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Privacy Policy </a></li>
                            <li><a href="#">Support Center</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Customer Service</h4>
                        <ul className="list-unstyled">
                            <li><a href="#">Warranty and Return</a></li>
                            <li><a href="#">Payment Methods</a></li>
                            <li><a href="#">Shipping  Handling</a></li>
                            <li><a href="#">Intellectual Property Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Other Business</h4>
                        <ul className="list-unstyled">
                            <li><a href="#" className="ee">Do I have to pay tax?</a></li>
                            <li><a href="#">Online Products</a></li>
                            <li><a href="#">Wholesale Program</a></li>
                            <li><a href="#">Affiliate Program</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    render(){
        return(
            <div className="bg-dark px-1 py-4 mt-5 text-light">
                {this.renderfooter()}
                <div className="bg-light d-flex  justify-content-around align-items-center">
                    <p className="px-5 py-3 text-dark mb-0"> copyright &copy; 2019 ALFARES.com</p>
                    <div className="text-dark mr-3"> Follow Us:
                    <a href="#"><i className="fab fa-facebook-square fa-2x mx-3"></i></a>
                    <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer