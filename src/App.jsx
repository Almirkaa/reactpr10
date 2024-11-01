import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{Header} from './component/Header/Header'

import { Route, Routes } from 'react-router-dom'
import { HomePage } from './component/HomePage/HomePage'
import { CardOneProduct } from './component/CardOneProduct/CardOneProduct'
import { UserPage } from './component/UserPage/UserPage'

function App() {
  return(
    <>
    <Header/>

    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/user' element={<UserPage></UserPage>}></Route>

      {/* <Route path='/catalog' element={<HomePage/>}></Route>
      <Route path='/where' element={<HomePage/>}></Route> */}
      <Route path='/:id' element={<CardOneProduct/>}></Route>
    </Routes>
    </>
  )
}

export default App
