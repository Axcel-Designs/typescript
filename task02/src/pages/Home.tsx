import React from 'react'
import { productsData } from '../data/productsData'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <main className='py-4'>
      <section>
        <h1 className='font-semibold text-center my-4'>Products</h1>
        <p className='pl-4'>No of products {productsData.length}</p>
        <ul className='flex flex-wrap gap-4 justify-around'>
          {productsData.map((product) => (
            <div key={product.id} className='w-1/5 bg-yellow-100 rounded-lg p-2 cursor-pointer'
              onClick={() => navigate(`/shop/${product.id}`)}
            >
              <div className='flex justify-between gap-2'>
                {product.title}
              </div>
              <img src={product.images[0]} width={'40px'} alt={product.title}/>
              <div>
                ${product.price}
              </div>
            </div>
          ))}
        </ul>
      </section>
    </main>
  )
}
