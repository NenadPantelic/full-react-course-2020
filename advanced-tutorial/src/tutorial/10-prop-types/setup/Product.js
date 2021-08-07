import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";
const Product = ({ image, name, price }) => {
  return (
    <article className="product">
      {/* without prop types */}
      {/* <img src={image ? image.url : ""} alt={name} />
      <h4>{name}</h4>
      <p>${price || "N/A"}</p> */}

      {/* with prop types -> with default values*/}
      <img src={image.url} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  );
};
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

Product.defaultProps = {
  name: "N/A",
  price: 3.99,
  image: { url: defaultImage },
};
export default Product;
