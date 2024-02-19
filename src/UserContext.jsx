import { createContext, useContext, useState } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";
const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const { BASE_URL, user } = useContext(AuthContext);
  const [totalBalance, setTotalBalance] = useState("");
  const [userCollection, setUserCollection] = useState([]);
  const [allVehicles, setAllVehicles] = useState([]);
  const [totalVehicleAmount, setVehicleAmount] = useState([]);
  const DepositAmount = async (depositAmount, upiId) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/user/deposit-amount`,
        {
          depositAmount: depositAmount,
          upiID: upiId,
        },
        {
          headers: {
            Authorization: user.token,
          },
        }
      );
      if (response.status === 200) {
        alert("Deposit Successfully");
      }
    } catch (error) {
      console.error("Error Deposit Amount", error.message);
    }
  };

  const fetchUserCollections = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/user/fetch-user-vehicles`, {
        headers: {
          Authorization: user.token,
        },
      });

      if (response.status === 200) {
        // console.log(response.data)
        setUserCollection(response.data.vehicles);
      }
    } catch (error) {
      console.error("Error Fetching Total Balance:", error.message);
    }
  };

  const FetchTotalBalance = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/user/fetch-total-balance`, {
        headers: {
          Authorization: user.token,
        },
      });

      if (response.status === 200) {
        setTotalBalance(response.data.totalBalance);
      }
    } catch (error) {
      console.error("Error Fetching Total Balance:", error.message);
    }
  };

  const fetchAllVehicles = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/user/see-all-vehicle`, {
        headers: {
          Authorization: user.token,
        },
      });

      if (response.status === 200) {
        setAllVehicles(response.data.vehicles);
      }
    } catch (error) {
      console.error("Error Fetching Vehicles", error.message);
    }
  };

  const buyVehicle = async (
    vehicleId,
    vehiclePrice,
    vehicleImage,
    vehicleModel,
    vehicleName
  ) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/user/buy-vehicle`,
        {
          vehicleId: vehicleId,
          vehicleName: vehicleName,
          vehiclePrice: vehiclePrice,
          vehicleImage: vehicleImage,
          vehicleModel: vehicleModel,
        },
        {
          headers: {
            Authorization: user.token,
          },
        }
      );

      if (response.status === 200) {
        alert("Vehicle purchased successfully!");
      }
    } catch (error) {
      error.message;
    }
  };
  const fetchTotalVehicleAmount = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/user/fetch-total-vehicle-balance`,
        {
          headers: {
            Authorization: user.token,
          },
        }
      );

      if (response.status === 200) {
        setVehicleAmount(response.data.totalVehicleAmount);
      }
    } catch (error) {
      console.error("Error Fetching Vehicles", error.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        DepositAmount,
        FetchTotalBalance,
        totalBalance,
        fetchUserCollections,
        userCollection,
        fetchAllVehicles,
        allVehicles,
        buyVehicle,
        totalVehicleAmount,
        fetchTotalVehicleAmount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
