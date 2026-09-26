import React from "react";
import "./AddTransaction.css";
const AddTransactions = () => {
  return (
    <>
      <div className="container py-4" style={{ maxWidth: "1200px" }}>
        <div className="mb-4">
          <h1 className="h3 mb-1">Add Transaction</h1>
          <p className="text-muted mb-0">
            Log a new bit of income or spending — it only takes a few seconds.
          </p>
        </div>
        <div className="row g-3 justify-content-center">
          <div className="col-lg-7">
            <div className="card rounded-4 shadow-sm">
              <div className="card-body p-4">
                <form id="txForm" noValidate>
                  <div className="type-toggle mb-4">
                    <input
                      type="radio"
                      className="btn-check"
                      name="txType"
                      id="typeExpense"
                      defaultChecked
                    />
                    <label
                      className="btn cat-pick btn-expense flex-fill"
                      htmlFor="typeExpense"
                      style={{ borderRadius: "999px" }}>
                      ↑ Expense
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="txType"
                      id="typeIncome"
                    />
                    <label
                      className="btn cat-pick btn-income flex-fill"
                      htmlFor="typeIncome"
                      style={{ borderRadius: "999px" }}>
                      ↓ Income
                    </label>
                  </div>
                  {/* Amount and Date */}
                  <div className="row g-3 mb-1">
                    <div className="col-6">
                      <label className="form-label">
                        Amount <span className="req">*</span>
                      </label>
                      <div className="amount-wrap">
                        <span className="cur">$</span>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAmount"
                          placeholder="0.00"
                          inputMode="decimal"
                        />
                      </div>
                      <div
                        className="invalid-feedback d-block"
                        id="errAmount"
                        style={{ display: "none" }}>
                        ⚠ Enter a valid amount greater than $0
                      </div>
                    </div>
                    <div className="col-6">
                      <label className="form-label">
                        Date <span className="req">*</span>
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="inputDate"
                        defaultValue="2026-09-22"
                      />
                      <div
                        className="invalid-feedback d-block"
                        id="errDate"
                        style={{ display: "none" }}>
                        ⚠ Please pick a date
                      </div>
                    </div>
                  </div>
                  {/* Category */}
                  <div className="mb-3 mt-3">
                    <label className="form-label">
                      Category <span className="req">*</span>
                    </label>
                    <div className="cat-grid" id="catGrid"></div>
                    <div
                      className="invalid-feedback d-block"
                      id="errCategory"
                      style={{ display: "none" }}>
                      ⚠ Choose a category
                    </div>
                  </div>
                  {/* Description */}
                  <div className="mb-4">
                    <label className="form-label">
                      Description <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputDesc"
                      placeholder="e.g. Lunch with friends"
                    />
                    <div
                      className="invalid-feedback d-block"
                      id="errDesc"
                      style={{ display: "none" }}>
                      ⚠ A short description helps you remember this later
                    </div>
                  </div>
                  {/* Buttons */}
                  <div className="d-flex gap-2">
                    <button type="button" className="btn btn-ef-add flex-fill">
                      Add Transaction
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary rounded-pill flex-fill fw-bold">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddTransactions;
