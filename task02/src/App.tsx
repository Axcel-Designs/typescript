import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'
import { Suspense } from 'react'
import Loading from './component/loading'

function App() {

  return (
    <>
      <Header />
      <Suspense fallback={<Loading/>}>
        <Routes>
          {/* <Route path='/' element={</>}/> */}
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
