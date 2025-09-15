import React from "react";
import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <div className="bg-gray-900 text-gray-400 text-center py-4 text-sm">
      <p>
        © {new Date().getFullYear()} <span className="text-blue-500 font-semibold"><Link to="/">GoodlySoft</Link></span>. 
        All Rights Reserved.
      </p>
    </div>
  );
};

export default Copyright;
