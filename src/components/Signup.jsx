import  { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Register } = useContext(AuthContext);
  return (
    <div>
      <div>
        <div className="d-flex justify-content-center mt-5">
          <div className="w-50 d-grid gap-3 mt-5">
            <h1>Sign Up </h1>
            <div className="d-grid gap-3">
              <input
                type="Name"
                placeholder="Enter Name"
                className="form-control"
                value={name}
                onChange={(e) => {
                  setName(e.currentTarget.value);
                }}
              />
              <input
                type="Email"
                placeholder="Enter Email"
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                value={password}
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                }}
              />
            </div>
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-primary"
                onClick={() => Register(name, email, password)}
              >
                Signup
              </button>
            </div>
            <div>
              <p className="text-center">
                Already Have An Account ?
                <Link to="/">
                  <span className="text-danger">Sign In</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
