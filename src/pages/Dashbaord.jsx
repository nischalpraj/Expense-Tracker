import React from "react";
import "./Dashboard.css";

const Dashbaord = () => {
  return (
    <>
      <div className="container py-4" style={{ maxWidth: "1180px" }}>
        <div className="hero rounded-5 p-4 p-md-5 mb-4 d-flex flex-wrap justify-content-between align-items-center gap-3">
          <div>
            <h1
              className="h3 mb-1 fw-bold"
              style={{ fontFamily: "Plus Jakarta Sans" }}>
              Good morning, Nischal! 👋
            </h1>
            <p class="text-muted  mb-0">Here's your financial overview</p>
          </div>
          <div class="text-md-end">
            <div class="text-muted small fw-bold text-uppercase">
              Current Balance
            </div>
            <div class="balance">$980</div>
            <div class="text-muted small">
              Income − Expenses · looking healthy 🌿
            </div>
          </div>
        </div>

        <div className="row row-cols-2 row-cols-md-4 g-3 mb-4">
          <div class="col">
            <div class="card border rounded-4 shadow-sm h-100">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <div class="stat-icon balance">💰</div>
                  <span
                    class="badge rounded-pill"
                    style={{ background: "#E4F1E6", color: "#4C7A57" }}>
                    +18%
                  </span>
                </div>
                <div class="text-muted small fw-bold">Current Balance</div>
                <div class="stat-amount">$980</div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card border rounded-4 shadow-sm h-100">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <div class="stat-icon income">📈</div>
                  <span
                    class="badge rounded-pill"
                    style={{ background: "#E4F1E6", color: "#4C7A57" }}>
                    +6%
                  </span>
                </div>
                <div class="text-muted small fw-bold">Total Income</div>
                <div class="stat-amount">$1,700</div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card border rounded-4 shadow-sm h-100">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <div class="stat-icon expense">📉</div>
                  <span
                    class="badge rounded-pill"
                    style={{ background: "#FBEAEF", color: "#C85C77" }}>
                    +11%
                  </span>
                </div>
                <div class="text-muted small fw-bold">Total Expenses</div>
                <div class="stat-amount">$720</div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card border rounded-4 shadow-sm h-100">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <div class="stat-icon budget">🎯</div>
                  <span
                    class="badge rounded-pill"
                    style={{ background: "#FDF0DE", color: "#C97F3F" }}>
                    72%
                  </span>
                </div>
                <div class="text-muted small fw-bold">Monthly Budget</div>
                <div class="stat-amount">$1,000</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-3 mb-4">
          <div className="col-lg-7">
            <div className="card border rounded-4 shadow-sm h-100">
              <div className="card-body p-4">
                <h2 className="h6 mb-0">Spending Overview</h2>
                <p className="text-muted small mb-3">
                  Where your money went this month
                </p>
                <div className="d-flex align-items-center gap-4 flex-wrap">
                  <svg
                    width="150"
                    height="150"
                    viewBox="0 0 176 176"
                    className="flex-shrink-0">
                    <circle
                      cx="88"
                      cy="88"
                      r="70"
                      fill="none"
                      stroke="#EEE4D6"
                      strokeWidth="26"
                    />
                    <g transform="rotate(-90 88 88)">
                      <circle
                        cx="88"
                        cy="88"
                        r="70"
                        fill="none"
                        stroke="#E8A968"
                        strokeWidth="26"
                        strokeDasharray="155.2 439.8"
                        strokeDashoffset="0"
                      />
                      <circle
                        cx="88"
                        cy="88"
                        r="70"
                        fill="none"
                        stroke="#E8879F"
                        strokeWidth="26"
                        strokeDasharray="105.7 439.8"
                        strokeDashoffset="-155.2"
                      />
                      <circle
                        cx="88"
                        cy="88"
                        r="70"
                        fill="none"
                        stroke="#9C8FC7"
                        strokeWidth="26"
                        strokeDasharray="64.1 439.8"
                        strokeDashoffset="-260.9"
                      />
                      <circle
                        cx="88"
                        cy="88"
                        r="70"
                        fill="none"
                        stroke="#E39A93"
                        strokeWidth="26"
                        strokeDasharray="39.7 439.8"
                        strokeDashoffset="-325.0"
                      />
                      <circle
                        cx="88"
                        cy="88"
                        r="70"
                        fill="none"
                        stroke="#6FA37A"
                        strokeWidth="26"
                        strokeDasharray="30.5 439.8"
                        strokeDashoffset="-364.7"
                      />
                      <circle
                        cx="88"
                        cy="88"
                        r="70"
                        fill="none"
                        stroke="#B7ABC4"
                        strokeWidth="26"
                        strokeDasharray="27.5 439.8"
                        strokeDashoffset="-395.2"
                      />
                      <circle
                        cx="88"
                        cy="88"
                        r="70"
                        fill="none"
                        stroke="#8FA8D9"
                        strokeWidth="26"
                        strokeDasharray="17.1 439.8"
                        strokeDashoffset="-422.7"
                      />
                    </g>
                  </svg>
                  <ul
                    className="list-unstyled flex-grow-1 mb-0"
                    style={{ minWidth: "160px" }}>
                    <li className="d-flex justify-content-between small mb-2">
                      <span>
                        <span
                          className="dot me-2"
                          style={{ background: "#E8A968" }}></span>
                        Bills
                      </span>
                      <span className="text-muted fw-bold">$254</span>
                    </li>
                    <li className="d-flex justify-content-between small mb-2">
                      <span>
                        <span
                          className="dot me-2"
                          style={{ background: "#E8879F" }}></span>
                        Food
                      </span>
                      <span className="text-muted fw-bold">$173</span>
                    </li>
                    <li className="d-flex justify-content-between small mb-2">
                      <span>
                        <span
                          className="dot me-2"
                          style={{ background: "#9C8FC7" }}></span>
                        Shopping
                      </span>
                      <span className="text-muted fw-bold">$105</span>
                    </li>
                    <li className="d-flex justify-content-between small mb-2">
                      <span>
                        <span
                          className="dot me-2"
                          style={{ background: "#6FA37A" }}></span>
                        Transport
                      </span>
                      <span className="text-muted fw-bold">$50</span>
                    </li>
                    <li className="d-flex justify-content-between small mb-0">
                      <span>
                        <span
                          className="dot me-2"
                          style={{ background: "#B7ABC4" }}></span>
                        Other
                      </span>
                      <span className="text-muted fw-bold">$45</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card border rounded-4 shadow-sm h-100">
              <div className="card-body p-4">
                <h2 className="h6 mb-0">Monthly Summary</h2>
                <p className="text-muted small mb-3">
                  Income vs. expenses, last 4 months
                </p>
                <div className="bar-chart">
                  <div className="bar-group">
                    <div className="bar-pair">
                      <div className="bar inc" style={{ height: "78%" }}></div>
                      <div className="bar exp" style={{ height: "54%" }}></div>
                    </div>
                    <small className="text-muted">Jun</small>
                  </div>
                  <div className="bar-group">
                    <div className="bar-pair">
                      <div className="bar inc" style={{ height: "81%" }}></div>
                      <div className="bar exp" style={{ height: "62%" }}></div>
                    </div>
                    <small className="text-muted">Jul</small>
                  </div>
                  <div className="bar-group">
                    <div className="bar-pair">
                      <div className="bar inc" style={{ height: "74%" }}></div>
                      <div className="bar exp" style={{ height: "35%" }}></div>
                    </div>
                    <small className="text-muted">Aug</small>
                  </div>
                  <div className="bar-group">
                    <div className="bar-pair">
                      <div className="bar inc" style={{ height: "85%" }}></div>
                      <div className="bar exp" style={{ height: "36%" }}></div>
                    </div>
                    <small className="text-muted">Sep</small>
                  </div>
                </div>
                <div className="d-flex gap-3 justify-content-center mt-3 small text-muted">
                  <span>
                    <span
                      className="dot me-1"
                      style={{ background: "#6FA37A" }}></span>
                    Income
                  </span>
                  <span>
                    <span
                      className="dot me-1"
                      style={{ background: "#E8879F" }}></span>
                    Expenses
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-lg-7">
            <div className="card border rounded-4 shadow-sm h-100">
              <div className="card-body p-4">
                <h2 className="h6 mb-0">Recent Transactions</h2>
                <p className="text-muted small mb-3">Your latest activity</p>

                <div className="d-flex align-items-center gap-3 py-2 border-bottom">
                  <div className="tx-icon c-food">🍜</div>
                  <div className="flex-grow-1">
                    <div className="fw-bold small">Weekly groceries</div>
                    <div className="text-muted" style={{ fontSize: "12.5px" }}>
                      Food · Sep 14
                    </div>
                  </div>
                  <div className="tx-amt-expense">-$120</div>
                </div>
                <div className="d-flex align-items-center gap-3 py-2 border-bottom">
                  <div className="tx-icon c-salary">💼</div>
                  <div className="flex-grow-1">
                    <div className="fw-bold small">Monthly salary</div>
                    <div className="text-muted" style={{ fontSize: "12.5px" }}>
                      Salary · Sep 1
                    </div>
                  </div>
                  <div className="tx-amt-income">+$1,500</div>
                </div>
                <div className="d-flex align-items-center gap-3 py-2">
                  <div className="tx-icon c-bills">💡</div>
                  <div className="flex-grow-1">
                    <div className="fw-bold small">Insurance</div>
                    <div className="text-muted" style={{ fontSize: "12.5px" }}>
                      Bills · Sep 28
                    </div>
                  </div>
                  <div className="tx-amt-expense">-$74</div>
                </div>

                <div className="d-flex gap-2 mt-3">
                  <button className="btn btn-outline-secondary rounded-pill flex-fill fw-bold btn-sm">
                    View All Transactions
                  </button>
                  <button className="btn btn-ef-add flex-fill">
                    + Add Transaction
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card border rounded-4 shadow-sm h-100">
              <div className="card-body p-4">
                <h2 className="h6 mb-0">Monthly Budget</h2>
                <p className="text-muted small mb-3">
                  Keep an eye on how you're pacing
                </p>
                <div className="d-flex justify-content-between align-items-baseline mb-2 small">
                  <span className="text-muted">
                    Spent{" "}
                    <b
                      className="text-dark"
                      style={{ fontFamily: "Fredoka", fontSize: "16px" }}>
                      $720
                    </b>{" "}
                    of $1,000
                  </span>
                </div>
                <div className="progress rounded-pill">
                  <div
                    className="progress-bar progress-bar-ef rounded-pill"
                    style={{ width: "72%" }}></div>
                </div>
                <div
                  className="small fw-bold mt-2"
                  style={{ color: "#4C7A57" }}>
                  🌿 $280 remaining — you're right on track.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashbaord;
