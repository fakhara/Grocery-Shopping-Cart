import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Product(props) {
    const { product } = props;
  return (
    <div key={product._id} className="card">
      <Link href={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt="product" />
      </Link>
      <div className="card-body">
        <Link href={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <div className="price">{product.price}kr</div>
      </div>
    </div>
  );
}
