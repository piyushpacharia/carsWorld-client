import { useContext, useState } from "react";
import AuthContext from "../AuthContext";
import { LuCoins } from "react-icons/lu";
import UserContext from "../UserContext";
import { IoCarSport } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const { user } = useContext(AuthContext);
  const { DepositAmount } = useContext(UserContext);
  const [depositAmount, setDepositAmount] = useState("");
  const [upiId, setUpiId] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      {user && (
        <div className=" d-flex justify-content-between w-100 bg-dark text-white p-4 ">
          <p onClick={() => navigate("/Home")} style={{ cursor: "pointer" }}>
            <IoCarSport style={{ width: "30px", height: "30px" }} /> || CARS
            WORLD
          </p>

          <span
            className="text-warning d-flex gap-2"
            style={{ float: "right", fontWeight: "500" ,cursor:"pointer"}}
            data-bs-toggle="modal"
            data-bs-target="#depositModal"
          >
            <LuCoins />
            Add Coins
          </span>
        </div>
      )}
      <div
        className="modal fade"
        id="depositModal"
        tabIndex="-1"
        aria-labelledby="depositModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="depositModalLabel">
                Deposit Coins
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
                  placeholder="Deposit Amount"
                  className="form-control"
                  value={depositAmount}
                  onChange={(e) => {
                    setDepositAmount(e.currentTarget.value);
                  }}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Upi Id"
                  value={upiId}
                  onChange={(e) => {
                    setUpiId(e.currentTarget.value);
                  }}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={() => {
                  DepositAmount(depositAmount, upiId);
                }}
              >
                Deposit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
