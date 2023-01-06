import React from "react";
import { Button, Form } from "react-bootstrap";
import { CartItemContext } from "../context/CartContext";
import Rating from "./Rating";

const Filters = () => {
  const {
    filterState: { byStock, byFastDelivery, byRating, sort },
    filterDispatch,
  } = CartItemContext();
  return (
    <div className="filters">
      <span className="title">Filter products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include out of stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() =>
            filterDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast delivery only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            filterDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating:</label>
        <Rating
          rating={byRating}
          onClick={(index) => {
            filterDispatch({
              type: "FILTER_BY_RATING",
              payload: index + 1,
            });
          }}
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button
        variant="light"
        onClick={() =>
          filterDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear filters
      </Button>
    </div>
  );
};

export default Filters;
