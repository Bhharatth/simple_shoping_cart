import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/context";

import Rating from "./Rating";

const Filters = () => {
  //const [rate, setRate] = useState(0);
  const {
    productDispatch,
    productState: { bystock, byFastDelivery, sort, byRating, searchQuery },
  } = CartState();
  //console.log({bystock, byFastDelivery, sort, byRating, searchQuery})


  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascenting"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={()=>
        productDispatch({
            type: "SORT_BY_PRICE",
            payload: "highToLow",
        })}
        checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={()=>
            productDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHigh",
            })}
            checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
      <Form.Check
          inline
          label="include out of stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={()=> 
            productDispatch({
                type: "FILTER_BY_STOCK",
            })}
            checked={bystock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="fast delivery only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={()=> 
            productDispatch({
                type: "FILTER_BY_DELEVERY",
            })}
            checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating:</label>
        <Rating
          rating={byRating}
          onClick={(i) => productDispatch({
            type: "FILTER_BY_RATING",
            payload: i + 1
          })}
          style={{ cursor: "poniter" }}
        />
      </span>
      <span>
        <Button variant="light" onClick={()=>
        productDispatch({
            type: "CLEAR_FILTERS"
        })}>Clear Filters</Button>
      </span>
    </div>
  );
};

export default Filters;
