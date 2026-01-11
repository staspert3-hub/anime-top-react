import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import MoiTop from './counter/moiTop'
import Prosmotrenno from './counter/prosmotrenno'
import { AnimatePresence } from 'motion/react'
import Animate from './components/Animate'
import Head from './components/HeaderPlus'

function App() {
  const location = useLocation()

  return (
    <>
      <Header/>
      <Head/>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.key}>
          <Route path='/' element={<Animate><MoiTop/></Animate>}></Route>
          <Route path='/top' element={<Animate><Prosmotrenno/></Animate>}></Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
