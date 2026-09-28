import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import expenseData from "../data/expenses.json";

const Dashboard = ({ transaction }) => {
  const navigate = useNavigate();

  const chartColors = [
    "#E8A968",
    "#E8879F",
    "#9C8FC7",
    "#E39A93",
    "#6FA37A",
    "#B7ABC4",
    "#8FA8D9",
  ];

const latestDate = transaction.length
  ? new Date(Math.max(...transaction.map((t) => new Date(t.date))))
  : new Date();

const currentMonthTx = transaction.filter((t) => {
  const d = new Date(t.date);
  return (
    d.getMonth() === latestDate.getMonth() &&
    d.getFullYear() === latestDate.getFullYear()
  );
});

const totalIncome = currentMonthTx
  .filter((t) => t.type === "income")
  .reduce((total, t) => total + t.amount, 0);

const totalExpense = currentMonthTx
  .filter((t) => t.type === "expense")
  .reduce((total, t) => total + t.amount, 0);

const balance =
  transaction
    .filter((t) => t.type === "income")
    .reduce((s, t) => s + t.amount, 0) -
  transaction
    .filter((t) => t.type === "expense")
    .reduce((s, t) => s + t.amount, 0);
  const recentTransactions = [...transaction]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  const categoryIconMap = {};

  [...expenseData.categories.expense, ...expenseData.categories.income].forEach(
    (cat) => {
      categoryIconMap[cat.name] = cat.icon;
    },
  );

 const categoryTotals = currentMonthTx
   .filter((t) => t.type === "expense")
   .reduce((totals, t) => {
     totals[t.category] = (totals[t.category] || 0) + t.amount;
     return totals;
   }, {});

  const categoryList = Object.entries(categoryTotals).sort(
    (a, b) => b[1] - a[1],
  );

  const totalForChart = categoryList.reduce(
    (sum, [name, amount]) => sum + amount,
    0,
  );

  const circumference = 2 * Math.PI * 70;

  const pieSegments = categoryList.reduce(
    (acc, [name, amount], index) => {
      const percent = amount / totalForChart;
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
   .filter((m) => m !== null)
   .slice(-4);

  const maxValue = Math.max(
    ...monthlyChartData.map((m) => m.income),
    ...monthlyChartData.map((m) => m.expense),
  );

  const monthlyBudget = expenseData.budget.monthly;
  const remaining = monthlyBudget - totalExpense;
  const percentUsed = (totalExpense / monthlyBudget) * 100;

  // Budget message
  let budgetMessage;
  let budgetColor;

  if (percentUsed >= 100) {
    budgetMessage = `🚨 Budget exceeded by $${Math.abs(remaining)}.`;
    budgetColor = "#C85C77";
  } else if (percentUsed >= 80) {
    budgetMessage = `⚠ You've used ${Math.round(
      percentUsed,
    )}% of your monthly budget.`;
    budgetColor = "#C97F3F";
  } else {
    budgetMessage = `🌿 $${remaining} remaining — you're right on track.`;
    budgetColor = "#4C7A57";
  }

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

            <p className="text-muted mb-0">Here's your financial overview</p>
          </div>

          <div className="text-md-end">
            <div className="text-muted small fw-bold text-uppercase">
              Current Balance
            </div>

            <div className="balance">${balance}</div>

            <div className="text-muted small">
              Income − Expenses · looking healthy 🌿
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="row row-cols-2 row-cols-md-4 g-3 mb-4">
          <div className="col">
            <div className="card border rounded-4 shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="stat-icon balance">💰</div>

                  <span
                    className="badge rounded-pill"
                    style={{
                      background: "#E4F1E6",
                      color: "#4C7A57",
                    }}>
                    {Math.round(percentUsed)}%
                  </span>
                </div>

                <div className="text-muted small fw-bold">Current Balance</div>

                <div className="stat-amount">${balance}</div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card border rounded-4 shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="stat-icon income">📈</div>

                  <span
                    className="badge rounded-pill"
                    style={{
                      background: "#E4F1E6",
                      color: "#4C7A57",
                    }}>
                    {Math.round(percentUsed)}%
                  </span>
                </div>

                <div className="text-muted small fw-bold">Total Income</div>

                <div className="stat-amount">${totalIncome}</div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card border rounded-4 shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="stat-icon expense">📉</div>

                  <span
                    className="badge rounded-pill"
                    style={{
                      background: "#FBEAEF",
                      color: "#C85C77",
                    }}>
                    {Math.round(percentUsed)}%
                  </span>
                </div>

                <div className="text-muted small fw-bold">Total Expenses</div>

                <div className="stat-amount">${totalExpense}</div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card border rounded-4 shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="stat-icon budget">🎯</div>

                  <span
                    className="badge rounded-pill"
                    style={{
                      background: "#FDF0DE",
                      color: "#C97F3F",
                    }}>
                    {Math.round(percentUsed)}%
                  </span>
                </div>

                <div className="text-muted small fw-bold">Monthly Budget</div>

                <div className="stat-amount">$1,000</div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
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
                    {categoryList.map(([name, amount], index) => (
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

                        <span className="text-muted fw-bold">${amount}</span>
                      </li>
                    ))}
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
                  Income vs. expenses, last 4 month
                </p>

                <div className="bar-chart">
                  {monthlyChartData.map((m) => (
                    <div key={m.label} className="bar-group">
                      <div className="bar-pair">
                        <div
                          className="bar inc"
                          style={{
                            height: `${(m.income / maxValue) * 100}%`,
                          }}></div>

                        <div
                          className="bar exp"
                          style={{
                            height: `${(m.expense / maxValue) * 100}%`,
                          }}></div>
                      </div>

                      <small className="text-muted">{m.label}</small>
                    </div>
                  ))}
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

        {/* Recent Transactions + Budget */}
        <div className="row g-3">
          <div className="col-lg-7">
            <div className="card border rounded-4 shadow-sm h-100">
              <div className="card-body p-4">
                <h2 className="h6 mb-0">Recent Transactions</h2>

                <p className="text-muted small mb-3">Your latest activity</p>

                {recentTransactions.map((t) => (
                  <div
                    key={t.id}
                    className="d-flex align-items-center gap-3 py-2 border-bottom">
                    <div
                      className={`tx-icon ${
                        t.type === "income" ? "c-income" : "c-expense"
                      }`}>
                      {categoryIconMap[t.category] || "🧾"}
                    </div>

                    <div className="flex-grow-1">
                      <div className="fw-bold small">{t.description}</div>

                      <div
                        className="text-muted"
                        style={{ fontSize: "12.5px" }}>
                        {t.category} · {t.date}
                      </div>
                    </div>

                    <div
                      className={
                        t.type === "income" ? "tx-amt-income" : "tx-amt-expense"
                      }>
                      {t.type === "income" ? "+" : "-"}${t.amount}
                    </div>
                  </div>
                ))}

                <div className="d-flex gap-2 mt-3">
                  <button
                    className="btn btn-outline-secondary rounded-pill flex-fill fw-bold btn-sm"
                    onClick={() => navigate("/transactions")}>
                    View All Transactions
                  </button>

                  <button
                    className="btn btn-ef-add flex-fill"
                    onClick={() => navigate("/addtransactions")}>
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
                      style={{
                        fontFamily: "Fredoka",
                        fontSize: "16px",
                      }}>
                      ${totalExpense}
                    </b>{" "}
                    of ${monthlyBudget}
                  </span>
                </div>

                <div className="progress rounded-pill">
                  <div
                    className="progress-bar rounded-pill"
                    style={{
                      width: `${Math.min(percentUsed, 100)}%`,
                      background: budgetColor,
                    }}></div>
                </div>

                <div
                  className="small fw-bold mt-2"
                  style={{ color: budgetColor }}>
                  {budgetMessage}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
