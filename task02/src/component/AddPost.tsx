import { useState } from "react"
import type { BlogPost } from "../types/blogPosts"
import Button from "./Button"
import Input from "./Input"

export default function AddPost({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    name: "", avatar: "", title: "",
  })
  function onFormData(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const newTask = {
    name: formData.name,
    avatar: formData.avatar,
    title: formData.title,
    createdAt: Date.now(),
  };
  function handleSubmit(e: React.FormEvent<HTMLElement>) {
    e.preventDefault()
    async function addPost() {
      try {
        const res = await fetch(import.meta.env.VITE_PROJECT, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newTask)
        })
        return await res.json()
      } catch (error) {
        console.log(error);
      }
    }
    addPost()
    onClose()
  }

  return (
    <section>
      <div className="my-4"><h3>Add Post</h3></div>
      <form action="" onSubmit={handleSubmit} >
        <div className="flex flex-col gap-4">
          <Input type="text" holder="Enter Name" id="name" label="Name" value={formData.name} change={onFormData} />
          <Input type="text" holder="Enter Title" id="title" label="Title" value={formData.title} change={onFormData} />
          <Input type="text" holder="Enter Img URL" id="avatar" label="Avatar" value={formData.avatar} change={onFormData} />
        </div>
        <div className="flex justify-center my-2">
          <Button label="Submit" type="submit" />
        </div>
      </form>
    </section>
  )
}
