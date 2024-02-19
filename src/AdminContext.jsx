import { createContext, useContext, useState } from "react";
import AuthContext from "./AuthContext";
import axios from "axios";
const AdminContext = createContext(null);

export function AdminContextProvider({ children }) {
  const { BASE_URL, user } = useContext(AuthContext);
  const [allVehicle, setallVehicle] = useState([]);
  const [adminSales, setAdminSales] = useState([]);
  const [userDeposits, setUserDeposits] = useState([]);

  const AddVehicle = async (vehicleName, vehicleModel, vehiclePrice) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/admin/add-vehicle`,
        {
          vehicleName: vehicleName,
          vehicleModel: vehicleModel,
          vehiclePrice: vehiclePrice,
        },
        {
          headers: {
            Authorization: user.token,
          },
        }
      );
      if (response.status === 201) {
        alert("Vehicle Added Successfully");
      }
    } catch (error) {
      console.error("Error adding vehicle:", error.message);
    }
  };

  const fetchAllVehicle = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/admin/show-admin-vehicles`,
        {
          headers: {
            Authorization: user.token,
          },
        }
      );

      if (response.status === 200) {
        setallVehicle(response.data.vehicles);
      }
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  const FetchUserPurchase = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/admin/purchase-details`, {
        headers: {
          Authorization: user.token,
        },
      });

      if (response.status === 200) {
        setAdminSales(response.data.userPurchases);
      }
    } catch (error) {
      console.error("Error fetching sales :", error.message);
    }
  };

  const FetchUserDeposits = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/admin/deposit-details`, {
        headers: {
          Authorization: user.token,
        },
      });

      if (response.status === 200) {
        setUserDeposits(response.data.depositInfo);
      }
    } catch (error) {
      console.error("Error fetching Deposit History :", error.message);
    }
  };

  return (
    <>
      <AdminContext.Provider
        value={{
          AddVehicle,
          fetchAllVehicle,
          allVehicle,
          adminSales,
          FetchUserPurchase,
          FetchUserDeposits,
          userDeposits
        }}
      >
        {children}
      </AdminContext.Provider>
    </>
  );
}

export default AdminContext;
