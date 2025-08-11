import { NavLink, useLocation } from "react-router-dom"

interface navB {
  label: string,
  path: string
}

const navBar: navB[] = [
  { label: 'Home', path: '/', },
  { label: 'About', path: 'about', },
  { label: 'Our Work', path: 'work', },
  { label: 'Blog', path: 'blog', },
  { label: 'Contact Us', path: 'contact', },
]

export default function Header() {
  const location = useLocation()
  const current = navBar.find(menu => {
    if (menu.path === '/' && location.pathname === '/') return true;
    return location.pathname.replace(/^\//, '') === menu.path;
  });
  const pageTitle = current ? current.label : 'Details';
  // const pageTitle = current && current.label 

  return (
    <>
      <header className="flex items-center justify-between md:justify-around p-2 gap-4">
        <div className="flex items-center">
          <div className='rounded-full flex justify-around items-center text-center border-gray-400'>
            <h3>Axcel Store</h3>
          </div>
        </div>
        <nav className='flex gap-4'>
          {navBar.map((menu, i) => (
            <NavLink to={menu.path} key={i} className={({ isActive }) => isActive ? `font-bold` : ''}>{menu.label}</NavLink>
          ))}
        </nav >
      </header >
      <section className='bg-gray-300 flex'>
        <div className='m-auto'>
          <>
            <h2>{pageTitle}</h2>
            <div className='flex'>
              <p>Home <em className='font-semibold'>|{' '}{pageTitle}</em></p>
            </div>
          </>
        </div>
      </section >
    </>
  )
}
