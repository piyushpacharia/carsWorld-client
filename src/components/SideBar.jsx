import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Sidebar() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const { Logout, user } = useContext(AuthContext);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div
      className="sidebar border "
      style={{ height: "93vh", overflow: "auto" }}
    >
      <div className="main sidebar-bars " style={{ width: "4rem" }}>
        <nav className="navbar navbar-expand  d-flex justify-content-center ">
          <button
            className="btn text-dark"
            type="button "
            data-bs-theme="dark"
            onClick={toggleSidebar}
          >
            <RxHamburgerMenu />
          </button>
        </nav>
      </div>
      <div className={`wrapper ${isSidebarCollapsed ? "collapsed" : ""}`}>
        <aside id="sidebar">
          <div className="h-100 slide-in">
            <div className="sidebar-logo "></div>
            <ul className="sidebar-ul mt-5 ">
              {user.role === "admin" && (
                <>
                  <li className="sidebar-li">
                    <Link to="/Sales">Sales</Link>
                  </li>
                  <li className="sidebar-li">
                    <Link to="/Showroom"> Showroom</Link>
                  </li>
                  <li className="sidebar-li">
                    <Link to="/User-Deposits"> User Deposits</Link>
                  </li>
                </>
              )}

              {user.role === "user" && (
                <>
                  <li className="sidebar-li">
                    <Link to="/Purchase-Vehicles">Purchase Vehicle</Link>
                  </li>
                  <li className="sidebar-li">
                    <Link to="/Collections">Your Collections</Link>
                  </li>
                </>
              )}
            </ul>

            <button className="btn btn-warning w-100" onClick={Logout}>
              Logout
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
