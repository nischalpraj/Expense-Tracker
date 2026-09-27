import React from "react";
import "./Transaction.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import expenseData from "../data/expenses.json";

const Transactions = ({ transaction, onDelete }) => {
  const navigate = useNavigate();

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [transactionToDelete, setTransactionToDelete] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
    const [sortBy, setSortBy] = useState("newest");
    const allCategories = transaction.map((t) => t.category);
    const uniqueCategories=[...new Set(allCategories)]

  const categoryIconMap = {};
  [...expenseData.categories.expense, ...expenseData.categories.income].forEach(
    (cat) => {
      categoryIconMap[cat.name] = cat.icon;
    },
  );

    const filterTransactions = transaction.filter((t) => {
        return (
            t.description.toLowerCase().includes(searchText.toLowerCase()) &&
            (typeFilter === "all" || t.type === typeFilter) &&
            (categoryFilter ==="all" || t.category === categoryFilter)
        )
    }).sort((a, b) => {
        if (sortBy === "high") {
             return b.amount - a.amount;
        }
        if (sortBy === "low") {
            return a.amount-b.amount
        }
        if (sortBy === "newest") {
          return new Date(b.date) - new Date(a.date);
        }
        if (sortBy === "oldest") {
          return new Date(a.date) - new Date(b.date);
        }
    })

  function getCategoryClass(type) {
    return type === "income" ? "c-income" : "c-expense";
  }

  function askDelete(t) {
    setTransactionToDelete(t);
    setShowDeleteConfirm(true);
  }

  function confirmDelete() {
    onDelete(transactionToDelete.id);
    setShowDeleteConfirm(false);
    setTransactionToDelete(null);
  }

  function cancelDelete() {
    setShowDeleteConfirm(false);
    setTransactionToDelete(null);
  }

  return (
    <>
      <div className="container py-4" style={{ maxWidth: "1180px" }}>
        <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
          <div>
            <h1 className="h3 mb-1" style={{ fontFamily: "Plus Jakarta Sans" }}>
              Transactions
            </h1>
            <p className="text-muted mb-0">
              Manage and review all your income and expenses.
            </p>
          </div>
          <button
            className="btn btn-ef-add"
            onClick={() => navigate("/addtransactions")}>
            + Add Transaction
          </button>
        </div>

        <div className="card filters-card rounded-4 shadow-sm mb-3 border">
          <div className="card-body p-3">
            <div className="d-flex flex-wrap align-items-center gap-2">
              <div
                className="position-relative flex-grow-1"
                style={{ minWidth: "220px" }}>
                <span
                  className="position-absolute top-50 start-0 translate-middle-y ps-3"
                  style={{ zIndex: 5 }}>
                  🔍
                </span>
                <input
                  type="text"
                  id="searchInput"
                  className="form-control rounded-pill ps-5"
                  placeholder="Search by description…"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>

              <select
                id="typeFilter"
                className="form-select rounded-pill flex-shrink-0"
                style={{ width: "auto" }}
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}>
                <option value="all">All types</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>

              <select
                id="catFilter"
                className="form-select rounded-pill flex-shrink-0"
                style={{ width: "auto" }}
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}>
                <option value="all">All categories</option>
                {uniqueCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              <select
                id="sortFilter"
                className="form-select rounded-pill flex-shrink-0"
                style={{ width: "auto" }}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}>
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
                <option value="high">Amount: High to Low</option>
                <option value="low">Amount: Low to High</option>
              </select>
            </div>
          </div>
        </div>

        <div
          className="card rounded-4 shadow-sm d-none d-md-block"
          id="tableCard">
          <div className="card-body p-4">
            <div className="table-responsive">
              <table className="table tx-table mb-0">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Type</th>
                    <th className="text-end">Amount</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody id="txTableBody">
                  {filterTransactions.map((t) => (
                    <tr key={t.id}>
                      <td className="tx-fredoka">{t.date}</td>
                      <td className="tx-fredoka">{t.description}</td>
                      <td>
                        <span
                          className={`cat-pill ${getCategoryClass(t.type)}`}>
                          <span>{categoryIconMap[t.category] || "🧾"}</span>
                          {t.category}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`badge rounded-pill ${
                            t.type === "income"
                              ? "badge-income"
                              : "badge-expense"
                          }`}>
                          {t.type}
                        </span>
                      </td>
                      <td
                        className={`text-end fw-bold ${
                          t.type === "income"
                            ? "tx-amt-income"
                            : "tx-amt-expense"
                        }`}>
                        {t.type === "income" ? "+" : "-"}${t.amount}
                      </td>
                      <td>
                        <button
                          className="btn-del"
                          onClick={() => askDelete(t)}
                          aria-label="Delete transaction">
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="d-md-none" id="cardsWrap"></div>

        <div className="empty-state text-center d-none" id="emptyState">
          <div style={{ fontSize: "48px" }} className="mb-3">
            🌱
          </div>
          <h3 className="h5 mb-1">No transactions yet</h3>
          <p className="text-muted mb-3">
            Once you add one, it'll show up right here.
          </p>
          <button className="btn btn-ef-add">Add Your First Transaction</button>
        </div>
      </div>

      {showDeleteConfirm && (
        <div className="modal-backdrop-custom">
          <div className="modal-content rounded-4 text-center p-4">
            <div className="delete-icon-wrap mb-3">🗑️</div>
            <h3 className="h5 mb-1 fw-bold">Delete this transaction?</h3>
            <p className="text-muted small mb-4">
              "{transactionToDelete?.description}" — this can't be undone.
            </p>
            <div className="d-flex gap-2">
              <button
                type="button"
                className="btn btn-outline-secondary rounded-pill flex-fill fw-bold"
                onClick={cancelDelete}>
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-del-confirm rounded-pill flex-fill fw-bold"
                onClick={confirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3">
        <div
          id="liveToast"
          className="toast align-items-center border-0"
          style={{ background: "#3A3345", color: "#fff" }}>
          <div className="d-flex">
            <div className="toast-body" id="toastMsg">
              Transaction deleted
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
