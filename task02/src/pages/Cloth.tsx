import React from 'react'
import { productsData } from '../data/productsData'
import { useNavigate } from 'react-router-dom'

export default function Cloth() {
  const cloths = productsData.filter(item => item.category.name === "Clothes")
  const navigate = useNavigate()
  return (
    <section>
      <h1 className='font-semibold text-center my-4'>Clothes</h1>
      <p className='p-4'>No of cloths {cloths.length}</p>
      <div className='flex flex-wrap gap-4 justify-around'>
        {cloths.map((cloth) => (
          <div key={cloth.slug} className='w-1/5 bg-blue-200 p-2 rounded-lg cursor-pointer'
            onClick={() => navigate(`/cloth/${cloth.slug}`)}
          >
            <div className='flex justify-between gap-2'>
              {cloth.title}
            </div>
            <img src={cloth.images[0]} width={'40px'} alt={cloth.title} />
            <div>
              ${cloth.price}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
