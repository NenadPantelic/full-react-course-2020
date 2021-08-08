import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders
const caclulateMostExpensive = (data) => {
  console.log("In caclulateMostExpensive");
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price >= total) {
        total = price;
      }
      return total;
    }, 0) / 100
  );
};
const Index = () => {
  const { products } = useFetch(url);
  // preserves value between renders and triggers new render
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  // on every click of the Add to cart button, state changes and re-render is triggered (and addToCart function is created again)
  // const addToCart = () => {
  //   setCart(cart + 1);
  // };
  // so, we click on the count button, count is changed, component is re-rendered, function addToCart is created again,
  // addToCart prop is changed, it triggers new re-render of the SingleProduct component

  const addToCart = useCallback(() => {
    setCart(cart + 1);
    // only when the cart is changed
  }, [cart]);
  // result of caclulateMostExpensive is memorized, it is not called on every click
  const mostExpensive = useMemo(
    () => caclulateMostExpensive(products),
    [products]
  );
  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: "3rem" }}>cart: {cart}</h1>
      <h1>Most expensive = ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

// memo memorizes value of the props of the component, if it is not changed, it will not trigger re-render
const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log("Big list called");
  });
  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.count("single item called");
  });
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </article>
  );
};
export default Index;
