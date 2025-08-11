import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import type { BlogPost } from '../types/blogPosts'
import Loading from "../component/loading";


export default function BlogDetails() {
	const params = useParams()
	const id = params.id
	const [data, setData] = useState<BlogPost | null>()
	const [loading, setLoading] = useState<boolean>(true)
	const [err, setErr] = useState<string>('')

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await fetch(`${import.meta.env.VITE_PROJECT}/${id}`, {
					method: 'GET',
					headers: { 'content-type': 'application/json' },
				})
				const data = await res.json()
				setData(data)
			} catch (error) {
				setErr(error instanceof Error ? error.message : String(error))
				console.log(error)
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [id])

	if (loading) return <><Loading /></>
	if (err) return <>{err}</>

	return (
		<>
			<main className='min-h-125'>
				<section className='my-4 p-4'>
					<div className='flex justify-between items-center'>
						{data.title}
						<NavLink to={'/blog'}><button className='border-2 py-1 px-4'>Go Back</button></NavLink>
					</div>
					{data && (
						<>
							<li key={data.id} className='w-50 flex flex-col justify-around items-center'>
								<li className='bg-gray-400 w-full'><img src={data.avatar} className='w-30 h-30 m-auto' /></li>
								<div>
									<h4>{data.name}</h4>
									<p>{data.title}</p>
								</div>
							</li>
						</>
					)}
				</section>
				{id}
			</main>
		</>
	)
}