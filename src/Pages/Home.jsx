import React from "react";
import { Link } from "react-router-dom";
import MyNavbar from "./Navbar";

const Home = () => {
  return (
    <>
      <MyNavbar />
      <div className="container mt-3">
        <div className="head ">
          <h1>
            Simplyfy Lives <br /> One Rides at a time{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            expedita <br /> exercitationem debitis ab illo vitae amet alias quis
            fugit deleniti <br />
            sit amet, consectetur adipisicing elit. Inventore expedita .
          </p>
        </div>
        <div className="img">
          <img
            className="w-50"
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
        <button className="bg-info border-0 p-2 rounded">
          <Link to={"/main"} className="text-black">
            booked Now
          </Link>
        </button>
      </div>
    </>
  );
};

export default Home;