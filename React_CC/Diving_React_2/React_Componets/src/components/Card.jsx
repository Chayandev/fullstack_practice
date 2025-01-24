import React from "react";

function Card(props) {
  return (
    <div className="bg-slate-600 rounded-md shadow-md px-8 py-4 flex flex-col justify-center items-center">
      <img
        src={props.profile_picture}
        alt=""
        className="rounded-full h-32 w-32 bg-red-50"
      />
      <h2 className="text-xl text-white font-semibold">{props.name}</h2>
      <h3 className="text-sm text-white">{props.profession}</h3>
      <h3 className="text-white font-medium">{props.location}</h3>
      <button className="py-2 px-6 mt-4 bg-lime-600 rounded-md shadow-sm">
        Add Friend
      </button>
    </div>
  );
}

export default Card;
