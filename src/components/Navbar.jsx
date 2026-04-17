import { NavLink } from 'react-router'
import { Home, Clock, ChartPie } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className="bg-white flex justify-between items-center px-8 py-4 shadow-sm">
            <div className="text-2xl font-bold text-darkGreen">
                KeenKeeper
            </div>
            <div className="flex gap-6">
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
        </nav>
    )
}

export default Navbar