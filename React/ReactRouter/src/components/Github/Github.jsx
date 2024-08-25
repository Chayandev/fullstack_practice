import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

//nesting like about/then next route provider h ere to got to the next page
//
function Github() {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/chayandev")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <>
      <div className="flex flex-col flex-wrap justify-center items-center p-4 bg-gray-600 text-white">
        Github Followers: {data.followers}
        <img
          src={data.avatar_url}
          alt="Git Pciture"
          width={300}
          className="pt-6"
        />
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/chayandev");
  return response.json();
};
