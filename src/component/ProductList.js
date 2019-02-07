import React from "react";
import ProductItem from "./ProductItem";

 const ProductList =({images})=> {
    const renderList=images.map((img)=>{
        return <ProductItem image={img} key={img} />
    });
        return(
            <div className="row mt-5">
                {renderList}
            </div>
        )
    
 }

 export default ProductList;