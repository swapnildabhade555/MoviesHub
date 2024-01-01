import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Nav-bar";
import {movies} from "./moviesData";

//import Navbar from "./Navbar";
export default class App extends React.Component{
  constructor(){
    super();
    this.state={
       movies:movies,
       cartCount:0
    }
}
handleIncstar=(movie)=>{
    const {movies}=this.state;
    const mid=movies.indexOf(movie);
    if(movies[mid].stars>=5){
        return;
    }
    movies[mid].stars+=0.5;
    this.setState({
        movies
    });

}
handleDecstar=(movie)=>{
    const {movies}=this.state;
    const mid=movies.indexOf(movie);
    if(movies[mid].stars<=0){
        return;
    }
    movies[mid].stars-=0.5;
    this.setState({
        movies
    })
}
handleToggleFav=(movie)=>{
    const {movies}=this.state;
    const mid=movies.indexOf(movie);
    movies[mid].fav=!movies[mid].fav;

    this.setState({
        movies
    })
}
handleToggleCart=(movie)=>{
    let {movies,cartCount}=this.state;
    const mid=movies.indexOf(movie);
    movies[mid].cart=!movies[mid].cart;
    
    if(movies[mid].cart){
      cartCount=cartCount+1;
    }else{
      cartCount=cartCount-1;
    }

    this.setState({
        movies,
        cartCount
    })
   // console.log(cartCount);
  }
  render(){
    const {movies,cartCount}=this.state;
    //console.log(cartCount,movies);
  return (
    <>
    <Navbar cartCount={cartCount}/>
    <MovieList movies={movies} addStars={this.handleIncstar}
      removeStars={this.handleDecstar} 
      handlefav={this.handleToggleFav}
      handleCart={this.handleToggleCart}
    
    />
    </>
  );
  }
}

