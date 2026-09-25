import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashbaord'

const MyRoute = () => {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  
                  <Route path='/' element={<Layout />} >
                      <Route index element={<Dashboard />}></Route>
                      

            </Route>
          </Routes>
          </BrowserRouter>
      </>
  )
}

export default MyRoute