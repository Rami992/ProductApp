import React from "react";
import ItemDetails from "./ItemDetails";
import ItemInfo from "./ItemInfo";

 class ProductDeatils extends React.Component {
    state={
        image: "https://images.pexels.com/photos/1096849/pexels-photo-1096849.jpeg?cs=srgb&dl=adult-banking-black-1096849.jpg&fm=jpg",
        info:{
            name:"Sleeveless Lace A Line Party Swing Skater Dress - Black S",
            price:66,
            discount:13,
            color:"black",
            size:"m"

        }
    }
    render(){
    
        return(
            <div className="row mb-5 d-flex align-content-center align-items-start">
                <ItemDetails image={this.state.image} />
                <ItemInfo info ={this.state.info} />
            </div>
        )
        }
 }

 export default ProductDeatils;