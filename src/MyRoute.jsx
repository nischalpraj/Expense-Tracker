import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashbaord'
import Transactions from './pages/Transactions'
import AddTransactions from './pages/AddTransactions'
import Reports from './pages/Reports'

const MyRoute = () => {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  
                  <Route path='/' element={<Layout />} >
                      <Route index element={<Dashboard />}></Route>
                      <Route path='transactions' element={<Transactions />} />
                      <Route path='addtransactions' element={<AddTransactions/>}/>
                      <Route path='reports' element={<Reports/>}/>

            </Route>
          </Routes>
          </BrowserRouter>
      </>
  )
}

export default MyRoute