//import useState hook to create menu collapse state
import React, { useState } from "react";

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
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "../static/Sidebar.css";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "../actions/auth";

const Sidebar = (props) => {
  const { logout, isAuthenticated } = props;

  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(true);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <div>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader style={{ paddingTop: "10px", paddingBottom: "5px" }}>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle className="my-icon" size={25} />
              ) : (
                <FiArrowLeftCircle className="my-icon" size={25} />
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome className="my-icon" />}>
                <Link className="my-text" to="/WeScribe_Frontend/">
                  Home
                </Link>
              </MenuItem>
              <MenuItem
                icon={<RiPencilLine className="my-icon" />}
                onClick={() => setMenuCollapse(false)}
              >
                <form className="form-inline">
                  <label
                    className="my-icon"
                    style={{ paddingInlineEnd: "15px" }}
                  >
                    Enter Video/Meeting URL:
                  </label>
                  <input
                    className="form-control w-100 pl-2 rounded"
                    type="text"
                    value={props.name.name}
                    onChange={props.video}
                  />
                </form>
              </MenuItem>
            </Menu>
          </SidebarContent>
          {isAuthenticated
            ? [
                <SidebarFooter>
                  <Menu iconShape="square">
                    <MenuItem icon={<CgNotes className="my-icon" />}>
                      <Link className="my-text" to="/WeScribe_Frontend/notes">
                        Notes
                      </Link>
                    </MenuItem>
                    <MenuItem icon={<FiLogOut className="my-icon" />}>
                      <Link
                        className="my-text"
                        to="/WeScribe_Frontend/"
                        onClick={logout}
                      >
                        Logout
                      </Link>
                    </MenuItem>
                  </Menu>
                </SidebarFooter>,
              ]
            : []}
        </ProSidebar>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
