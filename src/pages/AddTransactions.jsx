import React from "react";
import { useState } from "react";
import expenseData from "../data/expenses.json";
import "./AddTransaction.css";
import Swal from "sweetalert2"

const AddTransactions = ({ onAdd }) => {
  const [type, setType] = useState("expense");

  const [selectedcategory, setSelectedCategory] = useState("");

  const currentCategory = expenseData.categories[type];

  const [amount, setAmount] = useState("");

  const [date, setDate] = useState("");

  const [description, setDescription] = useState("");

  const [amountError, setAmountError] = useState(false);

  const [dateError, setDateError] = useState(false);

  const [descError, setDescError] = useState(false);

  const [categoryError, setCategoryError] = useState(false);

  function handleSubmit() {
    let hasError = false;

    if (isNaN(amount) || Number(amount) <= 0) {
      setAmountError(true);
      hasError = true;
    } else {
      setAmountError(false);
    }
    if (date === "") {
      setDateError(true);
      hasError = true;
    } else {
      setDateError(false);
    }
    if (description.trim() === "") {
      setDescError(true);
      hasError = true;
    } else {
      setDescError(false);
    }
    if (selectedcategory === "") {
      setCategoryError(true);
      hasError = true;
    } else {
      setCategoryError(false);
    }
    if (hasError) {
      return;
    }

    const newTransaction = {
      id: Date.now(),
      type: type,
      category: selectedcategory,
      description: description.trim(),
      date: date,
      amount: Number(amount),
    };

   onAdd(newTransaction);

   Swal.fire({
     icon: "success",
     title: "Transaction added!",
     text: `${newTransaction.description} — $${newTransaction.amount} has been saved.`,
     confirmButtonText: "Great",
     confirmButtonColor: "#3A3345",
     timer: 2500,
     timerProgressBar: true,
   });

   setAmount("");
   setDate("");
   setDescription("");
   setSelectedCategory("");
  }

  return (
    <>
      <div className="container py-4" style={{ maxWidth: "1200px" }}>
        <div className="mb-4">
          <h1 className="h3 mb-1" style={{ fontFamily: "Plus Jakarta Sans" }}>
            Add Transaction
          </h1>
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
                      checked={type === "expense"}
                      onChange={() => {
                        setType("expense");
                        setSelectedCategory("");
                      }}
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
                      checked={type === "income"}
                      onChange={() => {
                        setType("income");
                        setSelectedCategory("");
                      }}
                    />
                    <label
                      className="btn cat-pick btn-income flex-fill"
                      htmlFor="typeIncome"
                      style={{ borderRadius: "999px" }}>
                      ↓ Income
                    </label>
                  </div>
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
                          value={amount}
                          onChange={(e) => {
                            setAmount(e.target.value);
                            if (Number(e.target.value) > 0) {
                              setAmountError(false);
                            }
                          }}
                        />
                      </div>
                      <div
                        className={`invalid-feedback ${amountError ? "d-block" : ""}`}
                        id="errAmount">
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
                        value={date}
                        onChange={(e) => {
                          setDate(e.target.value);
                          if (e.target.value !== "") {
                            setDateError(false);
                          }
                        }}
                      />
                      <div
                        className={`invalid-feedback ${dateError ? "d-block" : ""}`}
                        id="errDate">
                        ⚠ Please pick a date
                      </div>
                    </div>
                  </div>
                  {/* Category */}
                  <div className="mb-3 mt-3">
                    <label className="form-label">
                      Category <span className="req">*</span>
                    </label>
                    <div className="cat-grid" id="catGrid">
                      {currentCategory.map((cat) => (
                        <div key={cat.name}>
                          <input
                            type="radio"
                            className="btn-check"
                            name="category"
                            id={cat.name}
                            checked={cat.name === selectedcategory}
                            onChange={() => {
                              setSelectedCategory(cat.name);
                              setCategoryError(false);
                            }}
                          />
                          <label className="cat-pick" htmlFor={cat.name}>
                            <span className="em">{cat.icon}</span>
                            {cat.name}
                          </label>
                        </div>
                      ))}
                    </div>
                    <div
                      className={`invalid-feedback ${categoryError ? "d-block" : ""}`}
                      id="errCategory">
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
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                        if (e.target.value.trim() !== "") {
                          setDescError(false);
                        }
                      }}
                    />
                    <div
                      className={`invalid-feedback ${descError ? "d-block" : ""}`}
                      id="errDesc">
                      ⚠ A short description helps you remember this later
                    </div>
                  </div>
                  {/* Buttons */}
                  <div className="d-flex gap-2">
                    <button
                      type="button"
                      className="btn btn-ef-add flex-fill"
                      onClick={() => handleSubmit()}>
                      Add Transaction
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary rounded-pill flex-fill fw-bold"
                      onClick={() => {
                        setAmount("");
                        setDate("");
                        setDescription("");
                        setSelectedCategory("");
                      }}>
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
