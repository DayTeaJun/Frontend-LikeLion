import React from "react";

export default function ItemGenerator({ datas }) {
  return (
    <>
      {datas.map((data, index) => {
        return (
          <div key={data.id}>
            {console.log(typeof data.id)}
            <h2>
              {index + 1}. {data.title}
            </h2>
            <time>{data.date}</time>
            <br />
            <strong>{data.food}</strong>
          </div>
        );
      })}
    </>
  );
}
