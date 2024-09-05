import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 mb-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border h-full">
          <figure>
            <img src={item.image} alt="Books" className=" w-full h-px-400" />
          </figure>
          <div className="p-5">
            <h2 className="card-title mb-3">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p className="text-left mb-3">{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline text-lg">${item.price}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
