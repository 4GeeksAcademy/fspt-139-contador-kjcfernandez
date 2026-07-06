import React from "react";
import SecondsCounter from "./SecondsCounter";

const Home = ({ seconds }) => {
  return (
    <div className="text-center">
      <SecondsCounter seconds={seconds} />
    </div>
  );
};

export default Home;
