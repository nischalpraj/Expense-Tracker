import React from "react";
import logo from "../assets/images/logo.png";
import "../components/Header.css";

const Header = () => {
  return (
    <>
      <header className="px-4">
        <nav className="navbar navbar-expand-lg ef-navbar sticky-top ">
          <div className="container-fluid">
            <a className="navbar-brand ef-logo" href="/">
              <img
                src={logo}
                alt="Logo"
                width={"50px"}
                          />
                          <span className="ef-logo-text">Expense Tracker</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav m-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/products">
                  Transactions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/carts">
                   Add Transaction
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                   Reports
                  </a>
                </li>
              </ul>
              <div class="d-flex align-items-center gap-3">
                <button class="btn btn-ef-add"> + Add Transaction</button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
