import { useState, useEffect } from 'react'

interface Data {
  id: string,
  avatar: string,
  title: string,
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
      const data: Data[] = await res.json
      setPosts(data)
    } catch (error) {
      setErr(error instanceof Error ? error.message : String(error));
      console.log(error)
    } finally {
      setLoading(false)
    } 
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>{
      posts.map((item, i) => (
        <li key={i}>{item.title}</li>
      ))
    }
      kk
    </>
  )
}
