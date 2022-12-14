import React from 'react'
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Rating from './Rating';

const Product = (props) => {

    const {product} = props;
        return (

            <Card className='product'>
              
                <Link to={`/product/${product.slug}`}>
                    <img src={product.image} className="card-img-top" alt={product.name}/>
                </Link>

            <Card.Body>

                <Link className='link-title' to={`/product/${product.slug}`}>
                    <Card.Title className='title'> {product.name} </Card.Title>
                </Link>
                <Rating rating={product.rating} numReviews={product.numReviews} />
                <Card.Text> ${product.price} </Card.Text>
                <Button> Add To Cart</Button>


            </Card.Body>

            </Card>



  )
}

export default Product