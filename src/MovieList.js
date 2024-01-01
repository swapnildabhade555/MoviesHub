import React from "react";
import Moviecard from "./Moviecard";

function MovieList(props){
    
        // const{movies:data}=this.props;
        // We can destructure movies like this also
        
        //const {title,plot,price,rating,stars,fav,cart}=this.state;
        const {movies,addStars,removeStars,handleCart,handlefav}=props;
        //console.log(movies,handleCart);
       // console.log(this.props);
        
    
        return(
            
             
        <div className="main">
           {movies.map((movie,index)=>(
                <Moviecard movies={movie} key={index}
                addStars={addStars}
                removeStars={removeStars} 
                handlefav={handlefav}
                handleCart={handleCart} 
                
                />
           ) )}

            </div>
            
            
        )
    
}

export default MovieList;