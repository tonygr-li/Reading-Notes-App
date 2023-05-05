import './Hero.css';
import Carousel from "react-material-ui-carousel";
import React from "react";
import { Paper } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";

const Hero = ({books}) => {
    //console.log('hero', books);

    const navigate = useNavigate();

    function reviews(bookId) {
        navigate(`/reviews/${bookId}`);
    }

    return (
        <div className="book-carousel-cointainer">
            <Carousel>
                {
                    books?.map((book) => {
                        return (
                            <Paper key={book.isbnId}>
                                <div className='book-card-container'>
                                    {/* <div className='book-card' style={{"--img": 'url(${book.backdrops[0]})'}}> */}
                                    <div className='book-card'>
                                        <div className='book-detail'>
                                            <div className='book-image'>
                                                <img src={book.image} alt={book.title} />
                                            </div>
                                            <div className='book-title'>
                                                <h4>{book.title}</h4>
                                            </div>
                                            <div className="book-buttons-container">
                                                <div className="book-review-button-container">
                                                    <Button variant ="info" onClick={() => reviews(book.isbnId)} >Reviews</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero;