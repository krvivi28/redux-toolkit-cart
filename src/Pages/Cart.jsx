import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
const Cart = () => {
  const items = useSelector((store) => {
    return store.cart;
  });
  return (
    <>
      <div className="flex flex-wrap p-1 mt-4">
        {items.map((data) => {
          return (
            <Card
              key={data.id}
              img={data.images[0]}
              title={data.title}
              price={data.price}
              description={data.description}
              product={data}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cart;
