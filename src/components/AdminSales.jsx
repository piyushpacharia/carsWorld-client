import { useContext, useEffect } from "react";
import AdminContext from "../AdminContext";

export default function AdminSales() {
  const { FetchUserPurchase, adminSales } = useContext(AdminContext);

  useEffect(() => {
    FetchUserPurchase();
  }, []);
  return (
    <div>
      <div className="bg-dark " style={{ height: "3rem" }}>
        <h1 className="text-light text-center">Sales History</h1>
      </div>

      <div className="container">
        <div className="row">
          {adminSales.map((sale, index) => (
            <div className="col-md-4" key={index}>
              <div className="card m-2">
                <img src={sale.vehicleImage} />
                <h5 className="card-title text-uppercase  text-center"><b>{sale.vehicleName}</b></h5>
                <p className="card-text"><b>Purchased By :</b> {sale.purchasedBy.name}</p>
                <p className="card-text"><b>Model:</b> {sale.vehicleModel}</p>
                <p className="card-text"><b>Price:</b> {sale.vehiclePrice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
