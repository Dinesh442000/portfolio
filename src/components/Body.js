import React from "react";

const Body = () => {
  return (
    <div>
      <div className="text-center font-bold pt-10 text-3xl felx ">Projects</div>
      <div className="flex align-bottom">
        <div className=" shadow-lg w-96 h-64 ml-56 mt-10">
          <div className="font-bold text-xl ml-24">
            YoutTubeClone
            <br />
          </div>
        </div>
        <div className=" shadow-lg w-96 h-64 ml-40 mt-10">
          <div className="font-bold text-xl ml-32">
            NetflixGPt
            <br />
          </div>
        </div>
        <div className=" shadow-lg w-96 h-64 ml-40 mt-10">
          <div className="font-bold text-xl ml-32">
            Food Order
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
