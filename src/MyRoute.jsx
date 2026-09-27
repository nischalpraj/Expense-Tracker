import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashbaord'
import Transactions from './pages/Transactions'
import AddTransactions from './pages/AddTransactions'
import Reports from './pages/Reports'
import expenseData from './data/expenses.json'

const MyRoute = () => {
        
    const transactionData = expenseData.transactions;

    const [transaction, setTransaction] = useState(() => {
        const saved = localStorage.getItem('expenseflow_transaction')
        if (saved) {
            return JSON.parse(saved)
        }
        return transactionData;
    })

    useEffect(() => {
        localStorage.setItem('expenseflow_transaction', JSON.stringify(transaction));
    },[transaction])

    function addTransaction(newTransaction){
        setTransaction([...transaction,newTransaction])
    }

    function deleteTransaction(id) {
        setTransaction(transaction.filter(t => t.id !== id))
    }


  return (
      <>
          <BrowserRouter>
              <Routes>
                  
                  <Route path='/' element={<Layout />} >
                      <Route index element={<Dashboard transaction={transaction} />}></Route>
                      <Route path='transactions' element={<Transactions transaction={transaction} onDelete={deleteTransaction} />} />
                      <Route path='addtransactions' element={<AddTransactions onAdd={addTransaction} />}/>
                      <Route path='reports' element={<Reports transaction={transaction } />}/>

            </Route>
          </Routes>
          </BrowserRouter>
      </>
  )
}

export default MyRoute