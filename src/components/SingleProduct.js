import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../context/context";
import Rating from "./Rating";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  

  return (
    <div className="products">
      <Card>
        <Card.Img varient="top" src={prod.image} alt={prod.img} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle>
            <span>$ {prod.price}</span>
            {prod.fastDelivery ? (
              <div>fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button 
            onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                });
              }}
               variant="danger">Remove from cart</Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                });
              }}
              disabled={!prod.inStock}
            >
              {!prod.inStock ? "out of stock" : "add to cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
