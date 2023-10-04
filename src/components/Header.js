import React from "react";
import { USER_IMG } from "../constants/constantData";
const Header = () => {
  return (
    <div className="flex  justify-between m-2 bg-slate-700 p-2 shadow-lg h-28 w-screen">
      <div>
        <img className="h-24 p-2 ml-3 " src={USER_IMG} alt="" />
      </div>
      <div className="flex items-center text-white ">
        <ul className="flex p-12 m-9 hover:cursor-pointer">
          <li className="px-4">Home</li>
          <a href="https://github.com/Dinesh442000">
            {" "}
            <li className="px-4">Github</li>
          </a>
          <a href="https://www.linkedin.com/in/dinesh-choudhary-95b47319a/">
            <li className="px-4">Linkedin</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
