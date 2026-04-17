import { useState } from 'react'
import { NavLink } from 'react-router'
import { Home, Clock, ChartPie, Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="bg-white px-8 py-4 shadow-sm relative">
            <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-darkGreen">
                    KeenKeeper
                </div>

                <div className="hidden md:flex gap-6">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'flex items-center gap-2 px-3 py-2 rounded-md bg-darkGreen text-white' : 'flex items-center gap-2 px-3 py-2 rounded-md text-gray-500 hover:text-darkGreen'}>
                        <Home size={18} /> Home
                    </NavLink>

                    <NavLink to="/timeline" className={({ isActive }) => isActive ? 'flex items-center gap-2 px-3 py-2 rounded-md bg-darkGreen text-white' : 'flex items-center gap-2 px-3 py-2 rounded-md text-gray-500 hover:text-darkGreen'}>
                        <Clock size={18} /> Timeline
                    </NavLink>

                    <NavLink to="/stats" className={({ isActive }) => isActive ? 'flex items-center gap-2 px-3 py-2 rounded-md bg-darkGreen text-white' : 'flex items-center gap-2 px-3 py-2 rounded-md text-gray-500 hover:text-darkGreen'}>
                        <ChartPie size={18} /> Stats
                    </NavLink>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-600 focus:outline-none cursor-pointer p-2">
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden flex flex-col gap-2 mt-4 pt-4 border-t border-gray-100">
                    <NavLink onClick={toggleMenu} to="/" className={({ isActive }) => isActive ? 'flex items-center gap-2 px-3 py-3 rounded-md bg-darkGreen text-white' : 'flex items-center gap-2 px-3 py-3 rounded-md text-gray-500 hover:bg-lightGreen hover:text-darkGreen'}>
                        <Home size={18} /> Home
                    </NavLink>

                    <NavLink onClick={toggleMenu} to="/timeline" className={({ isActive }) => isActive ? 'flex items-center gap-2 px-3 py-3 rounded-md bg-darkGreen text-white' : 'flex items-center gap-2 px-3 py-3 rounded-md text-gray-500 hover:bg-lightGreen hover:text-darkGreen'}>
                        <Clock size={18} /> Timeline
                    </NavLink>

                    <NavLink onClick={toggleMenu} to="/stats" className={({ isActive }) => isActive ? 'flex items-center gap-2 px-3 py-3 rounded-md bg-darkGreen text-white' : 'flex items-center gap-2 px-3 py-3 rounded-md text-gray-500 hover:bg-lightGreen hover:text-darkGreen'}>
                        <ChartPie size={18} /> Stats
                    </NavLink>
                </div>
            )}
        </nav>
    )
}

export default Navbar