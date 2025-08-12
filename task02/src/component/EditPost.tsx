import { useEffect, useState } from "react"
import type { BlogPost } from "../types/blogPosts"
import Button from "./Button"
import { InputEdit } from "./Input"
import { useNavigate, useParams } from "react-router-dom"

export default function EditPost({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate()
  const params = useParams()
  const { id } = params
  const [data, setData] = useState<BlogPost | null>(null)
  const [formData, setFormData] = useState<Partial<BlogPost>>({})
  
  useEffect(() => {
    if (data) {
      setFormData({
        name: data.name,
        avatar: data.avatar,
        title: data.title,
      });
    }
  }, [data]);

  function onFormData(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${import.meta.env.VITE_PROJECT}/${id}`, {
          method: "GET",
          headers: { "content-type": "application/json" },
        });
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id]);

  const newTask = {
    name: formData.name,
    avatar: formData.avatar,
    title: formData.title,
    createdAt: Date.now(),
  };
  function handleSubmit(e: React.FormEvent<HTMLElement>) {
    e.preventDefault()
    async function updatePost() {
      try {
        const res = await fetch(`${import.meta.env.VITE_PROJECT}/${id}`, {
          method: 'PUT',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newTask)
        })
        return await res.json()
      } catch (error) {
        console.log(error);
      }
    }
    updatePost()
    onClose()
    navigate('/blog')
  }

  return (
    <section>
      <div className="my-4"><h3>Edit Post</h3></div>
      <form action="" onSubmit={handleSubmit} >
        <div className="flex flex-col gap-4">
          <InputEdit type="text" holder="Enter Name" id="name" label="Name" value={formData.name || ''} change={onFormData} />
          <InputEdit type="text" holder="Enter Title" id="title" label="Title" value={formData.title || ''} change={onFormData} />
          <InputEdit type="text" holder="Enter Img URL" id="avatar" label="Avatar" value={formData.avatar || ''} change={onFormData} />
        </div>
        <div className="flex justify-center my-2">
          <Button label="Save Changes" type="submit" />
        </div>
      </form>
    </section>
  )
}
