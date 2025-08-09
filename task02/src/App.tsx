import './App.css'
import { Route, Routes } from 'react-router-dom'
import Loading from './component/loading'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Loading/>}/>
    </Routes>
     
    </>
  )
}

export default App
