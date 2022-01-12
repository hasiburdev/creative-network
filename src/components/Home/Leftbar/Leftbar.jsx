import React from "react";
import Bottom from "./Bottom";
import Top from "./Top";
import "./Leftbar.scss";

const Leftbar = () => {
  return (
    <div className="leftbar">
      <Top />
      <Bottom />
    </div>
  );
};

export default Leftbar;
