import React from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { Button } from "antd";
import "./TT.css";

const ToggleTheme = ({ darkTheme, toggleTheme }) => {
  return (
    <div className="toggle-btn">
      <Button onClick={toggleTheme} shape="circle">
        {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Button>
    </div>
  );
};

export default ToggleTheme;
