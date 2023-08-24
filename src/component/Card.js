
import React, { useEffect } from "react";

export const Card = ({e,text,price,title,picture}) => {
  // useEffect(()=>{},[])
  return (
    <div>
      <div>
        <div
          className="card mt-4"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src={picture} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{price}</p>

            <div className="container w-100">
              <select className="m-2 h-100 text-white bg-dark">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 text-white bg-dark">
                <option value="men">men</option>
                <option value="women">women</option>
              </select>
              <div className="d-inline fs-5">total price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};