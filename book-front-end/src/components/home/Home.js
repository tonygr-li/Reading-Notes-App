import React from "react";
import Hero from "../hero/Hero";

const Home = ({books}) => {
    console.log('home', books);
    return (
        //<div>hi</div>
        <Hero books = {books}/>
    );
}

export default Home;