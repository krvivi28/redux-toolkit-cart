import React, { useEffect, useState } from "react";
import Card from "./Card";
import { fetchProducts } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import LinearProgress from "@mui/material/LinearProgress";
function Products() {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.product);
  // const [loading, setLoading] = useState(true);
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    dispatch(fetchProducts());
    // const getProducts = async () => {
    //   const res = await fetch("https://dummyjson.com/products");
    //   const data = await res.json();
    //   setProducts(data.products);
    //   setLoading(false);
    //   console.log(data);
    // };
    // getProducts();
  }, []);
  return (
    <>
      {/* {loading && <LinearProgress color="inherit" />} */}
      {status === "loading" ? <LinearProgress color="inherit" /> : ""}
      <div className="flex flex-wrap p-1 mt-4">
        {data.map((data) => {
          return (
            <Card
              key={data.id}
              img={data.images[data.images.length - 1]}
              title={data.title}
              price={data.price}
              description={data.description}
              product={data}
              add="true"
            />
          );
        })}
      </div>
    </>
  );
}

export default Products;
