import React from "react";
import "./Transaction.css"

const Transactions = () => {
  return (
    <>
      <div class="container py-4" style={{ maxWidth: "1180px" }}>
        <div class="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
          <div>
            <h1 class="h3 mb-1">Transactions</h1>
            <p class="text-muted mb-0">
              Manage and review all your income and expenses.
            </p>
          </div>
          <button class="btn btn-ef-add">+ Add Transaction</button>
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
                />
              </div>

              <select
                id="typeFilter"
                className="form-select rounded-pill flex-shrink-0"
                style={{ width: "auto" }}>
                <option value="all">All types</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>

              <select
                id="catFilter"
                className="form-select rounded-pill flex-shrink-0"
                style={{ width: "auto" }}>
                <option value="all">All categories</option>
              </select>

              <select
                id="sortFilter"
                className="form-select rounded-pill flex-shrink-0"
                style={{ width: "auto" }}>
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
                <option value="high">Amount: High to Low</option>
                <option value="low">Amount: Low to High</option>
              </select>
            </div>
          </div>
        </div>
        <div class="card rounded-4x shadow-sm d-none d-md-block" id="tableCard">
          <div class="card-body p-4">
            <div class="table-responsive">
              <table class="table tx-table mb-0">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Type</th>
                    <th class="text-end">Amount</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody id="txTableBody"></tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="d-md-none" id="cardsWrap"></div>
        <div class="empty-state text-center d-none" id="emptyState">
          <div style={{ fontSize: "48px" }} class="mb-3">
            🌱
          </div>
          <h3 class="h5 mb-1">No transactions yet</h3>
          <p class="text-muted mb-3">
            Once you add one, it'll show up right here.
          </p>
          <button class="btn btn-ef-add">Add Your First Transaction</button>
        </div>
      </div>

      <div class="modal fade" id="deleteModal" tabindex="-1">
        <div
          class="modal-dialog modal-dialog-centered"
          style={{ maxWidth: "340px" }}>
          <div class="modal-content rounded-4x text-center p-3">
            <div class="modal-body">
              <div style={{ fontSize: "34px" }} class="mb-2">
                🗑️
              </div>
              <h3 class="h5 mb-1">Delete this transaction?</h3>
              <p class="text-muted small mb-4" id="deleteModalDesc">
                This can't be undone.
              </p>
              <div class="d-flex gap-2">
                <button
                  type="button"
                  class="btn btn-outline-secondary rounded-pill flex-fill"
                  data-bs-dismiss="modal">
                  Cancel
                </button>
                <button
                  type="button"
                  class="btn btn-danger rounded-pill flex-fill"
                  style={{ background: "#C85C77", border: "none" }}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3">
        <div
          id="liveToast"
          class="toast align-items-center border-0"
          style={{ background: "#3A3345", color: "#fff" }}>
          <div class="d-flex">
            <div class="toast-body" id="toastMsg">
              Transaction deleted
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
