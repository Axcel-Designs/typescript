export async function fetchData() {
	const res = await fetch(import.meta.env.VITE_PROJECT, {
		method: 'GET',
		headers: { 'content-type': 'application/json' },
	})
	return await res.json()
}