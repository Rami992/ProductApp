import React from "react";
 const ItemDetails=({image})=> {
    const renderImg=()=>{
        return(
            <div className="m-4 pt-5">
                <img src={image} alt="img" width="100%" className="rounded mx-auto d-block"  />
            </div>
        )
    }
        return(
            <div className="col-md-8">{renderImg()}</div>
        )
   
 }

 export default ItemDetails;