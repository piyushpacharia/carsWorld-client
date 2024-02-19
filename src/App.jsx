import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/SignIn";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { AuthContextProvider } from "./AuthContext";
import "./App.css";
import Sidebar from "./components/SideBar";
import AdminSales from "./components/AdminSales";
import AdminShowroom from "./components/AdminShowroom";
import { AdminContextProvider } from "./AdminContext";
import { UserContextProvider } from "./UserContext";
import Navbar from "./components/Navbar";
import UserCollections from "./components/UserCollections";
import Vehicles from "./components/PurchaseVehicles";
import UserDeposits from "./components/UserDeposits";

export default function App() {
  const location = useLocation();

  const isLoginPage = location.pathname === "/";
  const isSignUpPage = location.pathname === "/Signup";
  return (
    <div>
      <AuthContextProvider>
        <UserContextProvider>
          <AdminContextProvider>
            {isLoginPage || isSignUpPage ? (
              <div>
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/Signup" element={<Signup />} />
                </Routes>
              </div>
            ) : (
              <div>
                <div className="d-flex ">
                  <div>
                    <Sidebar />
                  </div>
                  <div className="right-side-bar">
                    <Navbar />
                    <Routes>
                      <Route path="/Home" element={<Home />} />
                      <Route path="/Sales" element={<AdminSales />} />
                      <Route path="/Showroom" element={<AdminShowroom />} />
                      <Route
                        path="/Collections"
                        element={<UserCollections />}
                      />
                      <Route path="/Purchase-Vehicles" element={<Vehicles />} />
                      <Route path="/User-Deposits" element={<UserDeposits />} />
                    </Routes>
                  </div>
                </div>
              </div>
            )}
          </AdminContextProvider>
        </UserContextProvider>
      </AuthContextProvider>
    </div>
  );
}
