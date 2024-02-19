import { useContext, useEffect } from "react";
import UserContext from "../UserContext";

export default function Vehicles() {
  const { fetchAllVehicles, allVehicles, buyVehicle } = useContext(UserContext);

  useEffect(() => {
    fetchAllVehicles();
  }, []);

  return (
    <div>
      <div className="bg-dark " >
        <h1 className="text-light text-center">Purchase Vehicles</h1>
      </div>
      <div>
        <div className="row">
          {allVehicles.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card m-2">
                <img
                  src={item.vehicleImage}
                  className="card-img-top"
                  alt="Vehicle"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.vehicleName}</h5>
                  <p className="card-text">Model: {item.vehicleModel}</p>
                  <p className="card-text">Price: {item.vehiclePrice}</p>
                </div>
                <div>
                  <button
                    className="btn btn-success w-100"
                    onClick={() =>
                      buyVehicle(
                        item.vehicleId,
                        item.vehiclePrice,
                        item.vehicleImage,
                        item.vehicleModel,
                        item.vehicleName
                      )
                    }
                  >
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
