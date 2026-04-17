import { Link } from 'react-router'

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 mt-12">
            <h1 className="text-9xl font-bold text-darkGreen mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-700 mb-6">Oops! Page not found</h2>
            <Link to="/" className="bg-darkGreen text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all">
                Go Back Home
            </Link>
        </div>
    )
}

export default NotFound