import React from "react";

function Test(){
    return(
        <div
      className=" cursor-pointer group bg-gray-400/15 rounded-lg p-3 flex justify-between items-baseline hover:bg-green-500/70 
        transition-all duration-300 ease-in-out"
    >
      <div className="flex flex-col gap-2">
        <h3 className="font-medium font-outfit text-white text-6xl">Let's</h3>
        <h4 className="font-medium font-outfit text-dark-oliv-green  transition-all duration-300 ease-in-out group-hover:text-white text-6xl">
          colaborate
        </h4>
        <p className="font-medium font-outfit text-gray-300/90 max-w-lg text-wrap">
          Unlock the potential of your product with expert design and
          development services. Let’s collaborate to create user-centered
          solutions that not only meet your goals but also delight your users.
        </p>
      </div>
      <div
        className="p-4 rounded-full bg-orange-500
  group-hover:bg-white transition-all duration-300 ease-in-out 
  relative overflow-hidden shadow-md"
      >
        <div className="w-5 h-5 relative">
          {/* White Arrow (Initially Visible) */}
          
        </div>
      </div>
    </div>
    )
}

export default Test;