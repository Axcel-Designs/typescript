import { NavLink } from "react-router-dom"

const navBar = [
    { label: 'Home', path: '/', },
    { label: 'About', path: 'about', },
    { label: 'Our Work', path: 'work', },
    { label: 'Blog', path: 'blog', },
    { label: 'Contact Us', path: 'contact', },
]

export default function Header() {
    return (
        <>
            <header className="flex items-center justify-around p-4">
                <div className="flex items-center">
                    <div className='rounded-full border-2 w-10 h-10 flex justify-around items-center text-center border-gray-400'>
                        <h1>C</h1>
                    </div>
                </div>
                <nav className='flex gap-4'>
                    {navBar.map((menu, i) => (
                        <NavLink to={menu.path} key={i} className={({ isActive }) => isActive ? `font-bold` : ''}>{menu.label}</NavLink>
                    ))}
                </nav >
            </header >
        </>
    )
}
