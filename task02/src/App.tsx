import { Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'
import { Suspense } from 'react'
import Loading from './component/loading'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import Contact from './pages/Contact'
import About from './pages/About'
import Work from './pages/Work'

function App() {

  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
         <main className="min-h-125 p-4 ">
        <Routes>
          <Route index element={<Home />} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog/:id' element={<BlogDetails />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
          <Route path='work' element={<Work />} />
        </Routes>
          </main>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
