import { useState, useEffect } from 'react'
import Loading from '../component/loading'
import { NavLink } from 'react-router-dom'
import type { BlogPost } from '../types/blogPosts'
import Modal from '../component/Modal'

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [err, setErr] = useState<string | null>('')

  async function getData() {
    try {
      const res = await fetch(import.meta.env.VITE_PROJECT, {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      })
      const data: BlogPost[] = await res.json()
      setPosts(data)
    } catch (error) {
      setErr(error instanceof Error ? error.message : String(error));
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getData();
  }, [])

  if (loading) return <><Loading /></>
  if (err) return <p>{err}</p>

  return (
    <>
      <main className='min-h-100 p-4 '>
        <div className='flex items-center justify-between px-2 my-2'>
          <h4>Posts No: {posts.length}</h4>
          <div><button className='border-2 py-1 px-4'>Add Posts</button></div>
        </div>
        <ul className='flex flex-wrap gap-3 justify-around items-center'>
          {posts.map((item) => (
            <li key={item.id} className='w-50 flex flex-col justify-around items-center'>
              <NavLink to={`/blog/${item.id}`} className='bg-gray-400 w-full'><img src={item.avatar} className='w-30 h-30 m-auto' /></NavLink>
              <div>
                <h4>{item.name}</h4>
                <p>{item.title}</p>
              </div>
            </li>
          ))
          }
        </ul>
      </main>
      <Modal/>
    </>
  )
}
