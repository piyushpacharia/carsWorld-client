import { useContext, useEffect, useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import AdminContext from "../AdminContext";

export default function AdminShowroom() {
  const [vehicleName, setVehicleName] = useState("");
  const [vehiclePrice, setVehiclePrice] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");

  const { AddVehicle, fetchAllVehicle, allVehicle } = useContext(AdminContext);

  useEffect(() => {
    fetchAllVehicle();
  }, []);

  return (
    <div>
      <div className="bg-dark " style={{ height: "3rem" }}>
        <button
          style={{ float: "right" }}
          type="button"
          className="btn btn-lg text-light"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        > 
          Add Vehicle <IoAddSharp />
        </button>
        <div className="text-center text-light display-6"><b>Stocks</b> </div>
      </div>


      <div className="container">
        <div className="row">
          {allVehicle.map((vehicle, index) => (
            <div className="col-md-4" key={index}>
              <div className="card m-2">
                <img
                  src={vehicle.vehicleImage}
                  className="card-img-top"
                  alt="Vehicle"
                />
                <div className="card-body">
                  <h5 className="card-title text-uppercase text-center">
                    <b>{vehicle.vehicleName}</b>
                  </h5>
                  <p className="card-text">Model: {vehicle.vehicleModel}</p>
                  <p className="card-text">Price: {vehicle.vehiclePrice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                New Vehicle
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-grid gap-2">
                <input
                  type="text"
                  placeholder="Vehicle Name"
                  className="form-control"
                  value={vehicleName}
                  onChange={(e) => {
                    setVehicleName(e.currentTarget.value);
                  }}
                />
                <input
                  type="Vehicle Model"
                  className="form-control"
                  placeholder="Vehicle Model"
                  value={vehicleModel}
                  onChange={(e) => {
                    setVehicleModel(e.currentTarget.value);
                  }}
                />
                <input
                  type="Vehicle Price"
                  className="form-control"
                  placeholder="Vehicle Price"
                  value={vehiclePrice}
                  onChange={(e) => {
                    setVehiclePrice(e.currentTarget.value);
                  }}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={() => {
                  AddVehicle(vehicleName, vehicleModel, vehiclePrice);
                }}
              >
                Add New
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
