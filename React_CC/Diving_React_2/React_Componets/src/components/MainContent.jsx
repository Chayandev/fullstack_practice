import React from "react";
import Card from "./Card";

function MainContent() {
  const users = [
    {
      name: "John Doe",
      age: 30,
      location: "New York, USA",
      profession: "Software Engineer",
      profile_picture: "https://example.com/images/john_doe.jpg",
    },
    {
      name: "Jane Smith",
      age: 25,
      location: "London, UK",
      profession: "Graphic Designer",
      profile_picture: "https://example.com/images/jane_smith.jpg",
    },
    {
      name: "Emily Johnson",
      age: 28,
      location: "Toronto, Canada",
      profession: "Product Manager",
      profile_picture: "https://example.com/images/emily_johnson.jpg",
    },
    {
      name: "Michael Brown",
      age: 35,
      location: "Sydney, Australia",
      profession: "Data Scientist",
      profile_picture: "https://example.com/images/michael_brown.jpg",
    },
    {
      name: "Sarah Williams",
      age: 22,
      location: "Berlin, Germany",
      profession: "Marketing Specialist",
      profile_picture: "https://example.com/images/sarah_williams.jpg",
    },
    {
      name: "Alice Cooper",
      age: 29,
      location: "San Francisco, USA",
      profession: "Web Developer",
      profile_picture: "https://example.com/images/alice_cooper.jpg",
    },
    {
      name: "Bob Martin",
      age: 32,
      location: "Paris, France",
      profession: "UX/UI Designer",
      profile_picture: "https://example.com/images/bob_martin.jpg",
    },
    {
      name: "Chris Lee",
      age: 27,
      location: "Tokyo, Japan",
      profession: "Blockchain Developer",
      profile_picture: "https://example.com/images/chris_lee.jpg",
    },
    {
      name: "David King",
      age: 38,
      location: "Berlin, Germany",
      profession: "Data Analyst",
      profile_picture: "https://example.com/images/david_king.jpg",
    },
    {
      name: "Eva Green",
      age: 24,
      location: "Barcelona, Spain",
      profession: "Content Writer",
      profile_picture: "https://example.com/images/eva_green.jpg",
    },
  ];

  console.log(users[0]);

  return (
    <div className="m-5 grid grid-flow-row grid-cols-5 gap-5 justify-center items-center">
      {users.map(function (user, idx) {
        return (
          <Card
            key={`user${idx}`}
            name={user.name}
            profession={user.profession}
            location={user.location}
            profile_picture={user.profile_picture}
          />
        );
      })}
    </div>
  );
}

export default MainContent;
