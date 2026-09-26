import React from "react";
import './Report.css'

const Reports = () => {
  return (
    <>
      <div className="container py-4" style={{ maxWidth: "1180px" }}>
        <div className="mb-4">
          <h1 className="h3 mb-1" style={{ fontFamily: "Plus Jakarta Sans" }}>
            Reports
          </h1>
          <p className="text-muted mb-0">
            A closer look at your spending habits.
          </p>
        </div>

        <div className="d-flex align-items-center gap-2 mb-4">
          <span className="fw-bold small text-muted">Viewing:</span>

          <select className="form-select month-select" id="monthSelect">
            <option value="Jan">January</option>
            <option value="Feb">February</option>
            <option value="March">March</option>
            <option value="Apr">April</option>
            <option value="May">May</option>
            <option value="Jun">June</option>
            <option value="Jul">July</option>
            <option value="Aug">August</option>
            <option value="Sep" defaultValue="Sep">
              September
            </option>
            <option value="Oct">October</option>
            <option value="Nov">November</option>
            <option valule="Dec">December</option>
          </select>
        </div>

        <div className="card rounded-4 shadow-sm mb-3">
          <div className="card-body p-4">
            <h2 className="h6 mb-0">Monthly Summary</h2>

            <p className="text-muted small mb-3">September at a glance</p>

            <div
              className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-2"
              id="monthSummaryGrid"></div>
          </div>
        </div>

        <div className="row g-3 mb-3">
          {/* Spending by Category */}
          <div className="col-lg-6">
            <div className="card rounded-4 shadow-sm h-100">
              <div className="card-body p-4">
                <h2 className="h6 mb-0">Spending by Category</h2>

                <p className="text-muted small mb-3">
                  Expense distribution this month
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
                      stroke="var(--border)"
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
                        strokeDashoffset="-325"
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

                      <span className="text-muted fw-bold">35%</span>
                    </li>

                    <li className="d-flex justify-content-between small mb-2">
                      <span>
                        <span
                          className="dot me-2"
                          style={{ background: "#E8879F" }}></span>
                        Food
                      </span>

                      <span className="text-muted fw-bold">24%</span>
                    </li>

                    <li className="d-flex justify-content-between small mb-2">
                      <span>
                        <span
                          className="dot me-2"
                          style={{ background: "#9C8FC7" }}></span>
                        Shopping
                      </span>

                      <span className="text-muted fw-bold">15%</span>
                    </li>

                    <li className="d-flex justify-content-between small mb-0">
                      <span>
                        <span
                          className="dot me-2"
                          style={{ background: "#6FA37A" }}></span>
                        Transport
                      </span>

                      <span className="text-muted fw-bold">7%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Expenses */}
          <div className="col-lg-6">
            <div className="card rounded-4 shadow-sm h-100">
              <div className="card-body p-4">
                <h2 className="h6 mb-0">Monthly Expenses</h2>

                <p className="text-muted small mb-3">
                  Spending trend across recent months
                </p>

                <div className="bar-chart">
                  <div className="bar-group">
                    <div className="bar" style={{ height: "48%" }}></div>
                    <small className="text-muted">Jun</small>
                  </div>

                  <div className="bar-group">
                    <div className="bar" style={{ height: "56%" }}></div>
                    <small className="text-muted">Jul</small>
                  </div>

                  <div className="bar-group">
                    <div className="bar" style={{ height: "31%" }}></div>
                    <small className="text-muted">Aug</small>
                  </div>

                  <div className="bar-group">
                    <div className="bar" style={{ height: "32%" }}></div>
                    <small className="text-muted">Sep</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="card rounded-4 shadow-sm">
          <div className="card-body p-4">
            <h2 className="h6 mb-0">Category Breakdown</h2>

            <p className="text-muted small mb-3">
              Highest spending category: <b className="text-dark">Bills</b>
            </p>

            <div id="catBreakdownList"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;
