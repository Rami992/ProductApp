import React from "react";
import "./style.css"
 const ItemInfo=({info})=> {
    const renderInfo=()=>{
        return(
            <div className="card text-center mt-5 my-card ">
                <div className="card-header">
                   <h1>{info.name}</h1>
                </div>
                <div className="card-body d-flex flex-column justify-content-around align-items-center">
                    <div className="card-title mb-4">
                        <p className="font-weight-bold text-uppercase ">Price:$<span className="font-weight-bold text-success">{info.price}</span></p>
                        <p className="font-weight-bold text-uppercase ">DisCount :<span  className="font-weight-bold ">{info.discount}</span><span className="text-bold text-danger">%off</span></p>
                    </div>
                    <div className=" card-text  btn-group d-flex align-items-center my-4">
                    <span className="font-weight-bold mr-3 ">SIZE:</span>
                    <button className="btn btn-primary" type="button">SM</button>
                    <button className="btn btn-primary" type="button">MD</button>
                    <button className="btn btn-primary" type="button">LG</button>
                    </div>
                    <div className="card-text btn-group d-flex align-items-center my-4 ">
                    <span className="font-weight-bold mr-2">COLOR :</span>
                    <button className="btn btn-dark" type="button">BL</button>
                    <button className="btn btn-waring" type="button">WH</button>
                    <button className="btn btn-danger" type="button">RE</button>
                    </div>
                </div>
                <div className="card-footer text-muted">
                    2 Days Ago
                 </div>
               
            </div>
        )
    }

        return(
            <div className="col-md-4 pt-3 ">{renderInfo()}</div>
        )
    
 }

 export default ItemInfo;


//  <div class="card text-center">
//  <div class="card-header">
//      My Card
//  </div>
//  <div class="card-body">
//      <h4 class="card-title">Card Title</h4>
//      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, perspiciatis.</p>
//      <a href="#" class="btn btn-danger">Read More</a>
//  </div>
//  <div class="card-footer text-muted">
//    2 Days Ago
//  </div>
// </div>





// <div className="d-flex justify-content-center flex-column mt-5">
// <h1>{info.name}</h1>
// <div>
//     <p><span className="font-weight-bold  ">Price:$</span>{info.price}</p>
//     <p><span className="font-weight-bold ">DisCount :</span>{info.discount}<span className="text-bold text-danger">%off</span></p>
// </div>
// <div className="btn-group d-flex align-items-center my-2">
// <span className="font-weight-bold mr-3 ">SIZE:</span>
// <button className="btn btn-primary" type="button">SM</button>
// <button className="btn btn-primary" type="button">MD</button>
// <button className="btn btn-primary" type="button">LG</button>
// </div>
// <div className="btn-group d-flex align-items-center ">
// <span className="font-weight-bold mr-2">COLOR :</span>
// <button className="btn btn-dark" type="button">BL</button>
// <button className="btn btn-waring" type="button">WH</button>
// <button className="btn btn-danger" type="button">RE</button>
// </div>
// </div>

