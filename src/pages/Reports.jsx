import React from "react";
import './Report.css'
import { useState } from "react";
import expenseData from '../data/expenses.json'

const Reports = ({ transaction }) => {
    
   const allMonths = [
     "Jan",
     "Feb",
     "Mar",
     "Apr",
     "May",
     "Jun",
     "Jul",
     "Aug",
     "Sep",
     "Oct",
     "Nov",
     "Dec",
    ];

      const monthlyFromLive = transaction.reduce((acc, t) => {
        const monthLabel = allMonths[new Date(t.date).getMonth()];

        if (!acc[monthLabel]) {
          acc[monthLabel] = {
            income: 0,
            expense: 0,
          };
        }

        if (t.type === "income") {
          acc[monthLabel].income += t.amount;
        } else {
          acc[monthLabel].expense += t.amount;
        }

        return acc;
      }, {});

      const monthlyChartData = allMonths
        .map((label) => {
          const live = monthlyFromLive[label];
          const fallback = expenseData.monthlySummaries[label];

          if (!live && !fallback) {
            return null;
          }

          return {
            label,
            income: live ? live.income : fallback.income,
            expense: live ? live.expense : fallback.expense,
          };
        })
        .filter((m) => m !== null);
    
    const maxExpense = Math.max(...monthlyChartData.map((m) => m.expense), 1);

    const [month, setMonth] = useState("Sep");
    
      const monthTransactions = transaction.filter(
        (t) => allMonths[new Date(t.date).getMonth()] === month,
    );
    
     const totalIncome = monthTransactions
       .filter((t) => t.type === "income")
       .reduce((total, t) => total + t.amount, 0);

     const totalExpense = monthTransactions
       .filter((t) => t.type === "expense")
       .reduce((total, t) => total + t.amount, 0);
   
    
     const categoryTotals = monthTransactions
       .filter((t) => t.type === "expense")
       .reduce((totals, t) => {
         if (!totals[t.category]) {
           totals[t.category] = 0;
         }

         totals[t.category] += t.amount;

         return totals;
       }, {});

     const categoryList = Object.entries(categoryTotals).sort(
       (a, b) => b[1] - a[1],
    );
    
      const chartColors = [
        "#E8A968",
        "#E8879F",
        "#9C8FC7",
        "#E39A93",
        "#6FA37A",
        "#B7ABC4",
        "#8FA8D9",
    ];
    
      const circumference = 2 * Math.PI * 70;

      const pieSegments = categoryList.reduce(
        (acc, [name, amount], index) => {
          const percent = amount / totalExpense;
          const arcLength = percent * circumference;

          const segment = {
            name,
            amount,
            color: chartColors[index % chartColors.length],
            dasharray: `${arcLength} ${circumference}`,
            dashoffset: -acc.offset,
          };

          return {
            segments: [...acc.segments, segment],
            offset: acc.offset + arcLength,
          };
        },
        { segments: [], offset: 0 },
      ).segments;

     const net = totalIncome - totalExpense;
     const count = monthTransactions.length;
     const topCategory = categoryList[0]?.[0] || "None";
  

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

          <select
            className="form-select month-select"
            id="monthSelect"
            value={month}
            onChange={(e) => {
              setMonth(e.target.value);
            }}>
            <option value="Jan">January</option>
            <option value="Feb">February</option>
            <option value="Mar">March</option>
            <option value="Apr">April</option>
            <option value="May">May</option>
            <option value="Jun">June</option>
            <option value="Jul">July</option>
            <option value="Aug">August</option>
            <option value="Sep">September</option>
            <option value="Oct">October</option>
            <option value="Nov">November</option>
            <option value="Dec">December</option>
          </select>
        </div>

        <div className="card rounded-4 shadow-sm mb-3">
          <div className="card-body p-4">
            <h2 className="h6 mb-0">Monthly Summary</h2>

            <p className="text-muted small mb-3">{month} at a glance</p>

            <div
              className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-2"
              id="monthSummaryGrid">
              {[
                { label: "Income", value: `$${totalIncome}` },
                { label: "Expenses", value: `$${totalExpense}` },
                { label: "Net Balance", value: `$${net}` },
                { label: "Transactions", value: `${count}` },
                { label: "Top Category", value: `${topCategory}` },
              ].map((item) => (
                <div className="col" key={item.label}>
                  <div className="msum-item">
                    <div className="l">{item.label}</div>
                    <div className="v">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
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
                      stroke="#EEE4D6"
                      strokeWidth="26"
                    />

                    <g transform="rotate(-90 88 88)">
                      {pieSegments.map((seg) => (
                        <circle
                          key={seg.name}
                          cx="88"
                          cy="88"
                          r="70"
                          fill="none"
                          stroke={seg.color}
                          strokeWidth="26"
                          strokeDasharray={seg.dasharray}
                          strokeDashoffset={seg.dashoffset}
                        />
                      ))}
                    </g>
                  </svg>

                  <ul
                    className="list-unstyled flex-grow-1 mb-0"
                    style={{ minWidth: "160px" }}>
                    {categoryList.map(([name, amount], index) => {
                      const percent = Math.round((amount / totalExpense) * 100);

                      return (
                        <li
                          key={name}
                          className="d-flex justify-content-between small mb-2">
                          <span>
                            <span
                              className="dot me-2"
                              style={{
                                background:
                                  chartColors[index % chartColors.length],
                              }}></span>
                            {name}
                          </span>

                          <span className="text-muted fw-bold">{percent}%</span>
                        </li>
                      );
                    })}
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
                  {monthlyChartData.map((m) => (
                    <div key={m.label} className="bar-group">
                      <div className="bar-pair">
                        <div
                          className="bar exp"
                          style={{
                            height: `${(m.expense / maxExpense) * 100}%`,
                          }}></div>
                      </div>
                      <small className="text-muted">{m.label}</small>
                    </div>
                  ))}
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
              Highest spending category:{" "}
              <b className="text-dark">{topCategory}</b>
            </p>

            <div id="catBreakdownList">
              {categoryList.map(([name, amount]) => {
                const percent = Math.round((amount / totalExpense) * 100);
                return (
                  <div key={name} className="py-2 border-bottom">
                    <div className="d-flex justify-content-between small mb-1">
                      <span className="fw-bold">{name}</span>
                      <span>
                        ${amount}{" "}
                        <span className="text-muted">({percent}%)</span>
                      </span>
                    </div>
                    <div className="progress rounded-pill">
                      <div
                        className="progress-bar rounded-pill"
                        style={{
                          width: `${percent}%`,
                          background: "#9C8FC7",
                        }}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;
