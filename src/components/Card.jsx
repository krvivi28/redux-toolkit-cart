import React from "react";
import { add, remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";
function Card(props) {
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <>
      <div className="card w-[280px] h-[350px] p-1 text-center border rounded-md border-1 border-black-700 m-1 flex items-center justify-center flex-col">
        <div className="img overflow-hidden">
          <img className="h-[240px] w-[280px]" src={props.img} alt="" />
          <div className="des">
            <div className="title font-bold">{props.title}</div>
            {/* <div className="about">{props.description.slice(0, 50)}...</div> */}
            <div className="price">Rs.{props.price}</div>
          </div>
          {props.add === "true" ? (
            <button
              className="bg-purple-700 text-white py-1 px-4 border rounded-md hover:bg-purple-900 cursor-pointer"
              onClick={() => {
                handleAdd(props.product);
              }}
            >
              Add to Cart
            </button>
          ) : (
            <div className="btn bg-red-800 text-white py-1 px-2 border rounded-md hover:bg-red-700 cursor-pointer">
              <button
                onClick={() => {
                  handleRemove(props.product.id);
                }}
              >
                Remove from Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
