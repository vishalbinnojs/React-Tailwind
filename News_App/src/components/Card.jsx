import React from "react";

const Card = ({details}) => {
   
  return (
    <>
    <div className="card bg-base-200 shadow-sm group overflow-hidden">
  <figure >
    <img
      src={details?.urlToImage}
      alt={details?.title} 
      loading="lazy"
      className="  w-full group-hover:scale-105 transform-gpu  duration-300 aspect-video object-cover "/>
  </figure>
  <div className="card-body">
    <h2 className="card-title line-clamp-2 text-primary">{details?.title}</h2>
    <p className="line-clamp-3">{details?.description}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>window.open(details?.url)} className="btn badge-outline mt-4 hover:btn-primary">Read More</button>
    </div>
  </div>
</div>
    </>
  )
};

export default Card;
