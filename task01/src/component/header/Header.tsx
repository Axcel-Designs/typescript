import React from 'react'

export default function Header() {
  const menu = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Cloth", path: "/cloth" },
    { label: "Contact", path: "/contact" },
    { label: "Shop", path: "/shop" }
  ]
  return (
    <header>
      <nav>
        <ul className='flex justify-center items-center gap-4 p-4 bg-gray-300'>
          {menu.map((item, index) => (
            <li key={index}>
              <a href={item.path}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
