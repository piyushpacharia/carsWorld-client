
import { useContext, useEffect } from "react";
import AuthContext from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { LuCoins } from "react-icons/lu";
import UserContext from "../UserContext";
import { IoCarSport } from "react-icons/io5";

export default function Home() {
  const { user } = useContext(AuthContext);
  const {
    FetchTotalBalance,
    totalBalance,
    totalVehicleAmount,
    fetchTotalVehicleAmount,
  } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (user) {
      FetchTotalBalance();
      fetchTotalVehicleAmount();
    }
  }, [user, FetchTotalBalance, fetchTotalVehicleAmount]);

  if (!user) {
    return null; // or a loading indicator or a message to prompt login
  }

  return (
    <div>
      <div className="d-grid gap-3 mt-3">
        <div className=" ">
          <div>
            {" "}
            <h2 className="text-center">{`Welcome ${user.name}`} </h2>
          </div>
          <div className="text-end border-bottom border-dark">
            <p style={{ fontSize: "2rem" }}>Total Coins </p>{" "}
            <p className="text-success " style={{ fontSize: "2rem" }}>
              <LuCoins /> {totalBalance}
            </p>
          </div>
          <div className="text-end border-bottom border-dark mt-5">
            <p style={{ fontSize: "2rem" }}>Total Vehicle Collection </p>{" "}
            <p className="text-success " style={{ fontSize: "2rem" }}>
              <IoCarSport /> {totalVehicleAmount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
