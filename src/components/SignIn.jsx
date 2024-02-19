import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { SignIn } = useContext(AuthContext);
  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <div className="w-50 d-grid gap-3 mt-5">
          <h1>Sign In </h1>
          <div className="d-grid gap-3">
            <input
              type="Email"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </div>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-primary"
              onClick={() => SignIn(email, password)}
            >
              Login
            </button>
          </div>
          <div>
            <p className="text-center">
              Don't Have An Account ?{" "}
              <Link to="/Signup">
                {" "}
                <span className="text-danger">SignUp</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
