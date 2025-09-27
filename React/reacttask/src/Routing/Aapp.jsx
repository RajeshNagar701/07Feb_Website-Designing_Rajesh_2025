import React from 'react'
import Ahome from './Pages/Ahome'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Aabout from './Pages/Aabout'
import Acontact from './Pages/Acontact'
import Ablog from './Pages/Ablog'
import Aheader from './Component/Aheader'
import Afooter from './Component/Afooter'

function Aapp() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<><Ahome/></>}></Route>
                <Route path="/index" element={<><Ahome/></>}></Route>
                <Route path="/about" element={<><Aabout/></>}></Route>
                <Route path="/blog" element={<><Aheader title="Blog Us"/><Ablog/><Afooter/></>}></Route>
                <Route path="/contact" element={<><Acontact/></>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Aapp