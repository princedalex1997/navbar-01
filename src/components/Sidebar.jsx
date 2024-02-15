import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {AiFillHdd,AiFillCreditCard} from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";
import { CgList } from "react-icons/cg";
import { RiDashboardFill } from "react-icons/ri";





const Sidebar = ({ children }) => {
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => setIsopen(!isOpen);
  const menuItems = [
    {
      path: "/",
      name: "Dashboard",
      icon: <RiDashboardFill />,
    },
    {
      path: "/About",
      name: "About",
      icon: <AiFillCreditCard />,
    },
    {
      path: "/Product",
      name: "Product",
      icon: <FaProductHunt />
    },
    {
      path: "/ProductList",
      name: "ProductList",
      icon: <CgList />,
    },
    {
      path: "/Login",
      name: "Login",
      icon: <CgList />,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_setion">
        <h1 style={{ display: isOpen ? "block" : "none", transform: isOpen ? "all 0.5s" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "40px" : "-15px"}} className="bars">
            <h1 onClick={toggle} ><AiFillHdd /></h1>
          </div>
        </div>
        {menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
          >
            <div className="icon">{item.icon}</div>
            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main> {children} </main>
    </div>
  );
};

export default Sidebar;
