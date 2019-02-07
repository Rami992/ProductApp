import React from "react";

 const ProductItem = ({image})=> {

     const renderCard=()=>{
            return (
                <div className="card m-1" >
                    <img className="card-img-top" src={image} alt="img" />
                    <div className="card-body">
                        <h4 className="card-title">Card Title</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.Totam animi debitis, error ipsam praesentium aliquid.</p>
                        <a href="#" className="btn btn-success btn-block">Read More</a>
                    </div>
                </div>
            )
        }
        return(
            <div className="col-md-4">
                {renderCard()}
            </div>
        )
    
 }

 export default ProductItem;
