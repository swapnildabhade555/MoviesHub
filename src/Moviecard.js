import React from "react";

function MovieCard(props){
        
  const { title, plot, price, poster, rating, stars, fav, cart } = props.movies;
  const { movies,addStars, removeStars, handlefav, handleCart } = props;

    return(
        //Movie Card
        <div className="movie-card">

            {/**Left section of Movie Card */}
            <div className="left">
                <img alt="poster" src={poster} />
            </div>
            
            {/**Right section Movie Card */}
            <div className="right">

                {/**Title, plot, price of the movie */}
                <div className="title">{title}</div>
                <div className="plot">{plot}</div>
                <div className="price">Rs. {price}</div>

                {/**Footer starts here with ratings, stars and buttons */}
                <div className="footer">
                    <div className="rating">{rating}</div>
                    <img className="str-btn" 
                            alt="decrease" 
                            src="https://cdn-icons-png.flaticon.com/128/56/56889.png" 
                            onClick={() => removeStars(movies)}
                        />

                    {/**Star image with increase and decrease buttons and star count */}
                    <div className="star-dis">
                        
                        <img className="stars" 
                                alt="stars" 
                                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"    
                        />
                        <img className="str-btn" 
                            alt="increase" 
                            src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" 
                            // No binding required as addStars() is an arrow function
                            onClick={() => addStars(movies)}
                        />
                        <span className="starCount">{stars}</span>
                    </div>

                    {/**conditional rendering on Favourite button */}
                    <button className={fav?"unfavourite-btn":"favourite-btn"}  
                            onClick={() => handlefav(movies)}> 
                                
                                {fav ? "Un-favourite":"Favourite"}

                    </button>
                        
                    {/**Conditional Rendering on Add to Cart Button */}
                    <button className={cart?"unfavourite-btn":"cart-btn"}  
                            onClick={() => handleCart(movies)}>
                                
                                    {cart ? "Add to Cart":"Remove From Cart"}

                    </button>
                    
                </div>
            </div>
           
        </div>
        
    )
}


export default MovieCard;