import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'

const MyRoute = () => {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  
                    <Route path='/' element={<Layout/>}/>

          </Routes>
          </BrowserRouter>
      </>
  )
}

export default MyRoute