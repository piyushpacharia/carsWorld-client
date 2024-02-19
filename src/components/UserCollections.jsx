import { useContext, useEffect } from "react";
import UserContext from "../UserContext";

export default function UserCollections() {
  const { fetchUserCollections, userCollection, totalVehicleAmount } =
    useContext(UserContext);

  useEffect(() => {
    fetchUserCollections();
  }, []);
  return (
    <div>
      <div className="bg-dark ">
        <h1 className="text-light text-center">Your Collections</h1>
        <h5 className="text-end text-light">
          Total Collection : {totalVehicleAmount}
        </h5>
      </div>
      <div className="row">
        {userCollection.map((vehicle, index) => (
          <div className="col-md-4" key={index}>
            <div className="card m-2">
              <img
                src={vehicle.vehicleImage}
                className="card-img-top"
                alt="Vehicle"
              />
              <div className="card-body">
                <h5 className="card-title">{vehicle.vehicleName}</h5>
                <p className="card-text">Model: {vehicle.vehicleModel}</p>
                <p className="card-text">Price: {vehicle.vehiclePrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
