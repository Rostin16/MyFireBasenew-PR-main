
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  let handleChange = (e) => {
    let { name, value } = e.target;
    setUser((prevstate) => ({ ...prevstate, [name]: value }));
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    if (!user.email || !user.password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      if (login) {
        await signInWithEmailAndPassword(auth, user.email, user.password);
      } else {
        let res = await createUserWithEmailAndPassword(auth, user.email, user.password).catch((err) => {
          alert(err.code);
        });
      }



      setUser({});
      navigate("/home");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-3">
        <button
          className={`btn ${!login ? "btn-primary" : "btn-outline-primary"} mx-2`}
          onClick={() => setLogin(false)}
        >
          SignUp
        </button>
        <button
          className={`btn ${login ? "btn-primary" : "btn-outline-primary"} mx-2`}
          onClick={() => setLogin(true)}
        >
          Login
        </button>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h3 className="text-center mb-4">{login ? "Login" : "SignUp"}</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  value={user.email}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  value={user.password}
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                {login ? "Login" : "SignUp"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
