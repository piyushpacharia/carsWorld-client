import { useContext, useEffect } from "react";
import AdminContext from "../AdminContext";

export default function UserDeposits() {
  const { FetchUserDeposits, userDeposits } = useContext(AdminContext);
  useEffect(() => {
    FetchUserDeposits();
  }, []);
  return (
    <div>
      <div className="bg-dark ">
        <h1 className="text-light text-center ">User Deposit History</h1>
      </div>

      <div>
        {userDeposits.map((item, index) => (
          <div key={index}>
            <div className="mt-2 p-3" style={{ backgroundColor: "#d5d5d5" }}>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6 col-sm-12">
                  <p>
                    <b>User Name :</b>{item.depositedBy.name}
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-sm-12">
                  <p>
                    <b>User Account No :</b> {item.depositedBy._id}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6 col-sm-12">
                  <p>
                    <b>Deposit Amount :</b> {item.depositAmount}
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-sm-12">
                  <p>
                    <b>Inflation :</b> {item.inflation}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6 col-sm-12">
                  <p>
                  <b>Deposited AT :</b> {item.updatedAt}
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-sm-12">
                  <p>
                    <b>Upi ID :</b> {item.upiID}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
