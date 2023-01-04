import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";

const Filters = () => {
  const [rate, setRate] = useState(1);
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
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include out of stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast delivery only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating:</label>
        <Rating
          rating={rate}
          onClick={(index) => {
            setRate(index + 1);
          }}
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button variant="light">Clear filters</Button>
    </div>
  );
};

export default Filters;
