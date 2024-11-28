import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./Components/AuthPage";
import Home from "./Components/HomePage";
import AddUser from "./Components/AddUser";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="/">
              My FireStore
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    LogIn
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/home">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
