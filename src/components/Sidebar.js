//import useState hook to create menu collapse state
import React, { useState } from "react";
import logo from "../assests/images/logowhite.svg";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";
// import { Link } from "@mui/material";
 import { Link,useHistory } from "react-router-dom";

const Sidebar = () => {
  const history = useHistory();
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const Logout =()=>{
    history.push("/");
  }

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}

              <p>
                {menuCollapse ? (
                  <img src={logo} height="80" alt="logo" />
                ) : (
                  <img src={logo} height="80" alt="logo" />
                )}
              </p>
            </div>
            {/* <div className="closemenu" onClick={menuIconClick}> */}
            {/* changing menu collapse icon on click */}
            {/* {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div> */}
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              {/* <MenuItem active={true} icon={<FiHome />}>
                Home
              </MenuItem> */}
              <MenuItem id="MenuItem" icon={<FaList />}>
              <Link to="/dashboard"> Dashboard</Link>
              </MenuItem>
              <MenuItem icon={<FaRegHeart />}><Link to="/nexcouser">Users</Link></MenuItem>
              <MenuItem icon={<RiPencilLine />}><Link to="/studentform">StudentForm</Link></MenuItem>
              <MenuItem icon={<BiCog />}><Link to="/insitutes">Insitutes</Link></MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />} onClick={Logout}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
