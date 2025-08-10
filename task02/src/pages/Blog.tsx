import { useState, useEffect } from 'react'
import Loading from '../component/loading'
interface Data {
  id: string,
  avatar: string,
  title: string,
  name: string,
  createdAt: string,
}

export default function Blog() {
  const [posts, setPosts] = useState<Data[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [err, setErr] = useState<string | null>('')

  async function getData() {
    try {
      const res = await fetch('https://6897f805ddf05523e55ddb1f.mockapi.io/post', {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      })
      const data: Data[] = await res.json()
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
  if (err) return <p>{err}</p>;
  return (
    <>
      <main className='min-h-100 p-4'>
        <ul className='flex flex-wrap gap-3 justify-around items-center'>
          {posts.map((item) => (
            <li key={item.id} className='w-50'>
              <div><div><img src={item.avatar} /></div>
              <h4>{item.name}</h4>
              <p>{item.title}</p>
              </div>
            </li>
          ))
          }
        </ul>
      </main>
    </>
  )
}
