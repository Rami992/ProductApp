import React from "react";
import Header from "./Header";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";
import Footer from "./Footer";
class App extends React.Component{
    state={
        img:["https://images.pexels.com/photos/235525/pexels-photo-235525.jpeg?cs=srgb&dl=abstract-apparel-background-235525.jpg&fm=jpg"
        ,"https://images.pexels.com/photos/459473/pexels-photo-459473.jpeg?cs=srgb&dl=cloth-color-pattern-459473.jpg&fm=jpg",
        "https://images.pexels.com/photos/827056/pexels-photo-827056.jpeg?cs=srgb&dl=blanket-checkered-close-up-827056.jpg&fm=jpg",
        "https://images.pexels.com/photos/159049/braid-background-woven-rubber-bands-159049.jpeg?cs=srgb&dl=abstract-blue-pattern-bright-159049.jpg&fm=jpg"
        ,"https://images.pexels.com/photos/413676/pexels-photo-413676.jpeg?cs=srgb&dl=bright-cloth-fabric-413676.jpg&fm=jpg",
        "https://images.pexels.com/photos/1487711/pexels-photo-1487711.jpeg?cs=srgb&dl=abstract-backgrounds-blue-1487711.jpg&fm=jpg"
        
    ]
    }

    render(){
    return(
        <div>
            <Header />
            <div  className="container">
                <ProductDetails />
                <ProductList images={this.state.img} />
            </div>
            <Footer />
        </div>
    )
}
}

export default App;