import React from 'react'
import { useParams } from 'react-router-dom'
import { productsData } from '../data/productsData'

export default function ShopId() {
  const { id } = useParams()
  const Products = productsData.find(item => item.id === Number(id))

  return (
    <section className='p-4 flex justify-around items-center '>
      <div className='w-4/5 md:w-3/5 bg-yellow-200 rounded-lg p-4 flex flex-col gap-4'>
        <h1 className='font-semibold'>{Products?.title}</h1>
        <img src={Products?.images[0]} alt={Products?.title} width={'100px'} />
        <h1>${Products?.price}</h1>
        <h1>{Products?.description}</h1>
        <h1>{Products?.category.name}</h1>
      </div>
    </section>
  )
}
