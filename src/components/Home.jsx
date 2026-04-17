import { useState, useEffect } from 'react'
import FriendCard from './FriendCard'

const Home = () => {
    const [friends, setFriends] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/friends.json')
            .then(res => res.json())
            .then(data => {
                setFriends(data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <div className="min-h-[60vh] flex justify-center items-center">
                <div className="w-12 h-12 border-4 border-darkGreen border-t-transparent rounded-full animate-spin"></div>
            </div>
        )
    }

    return (
        <div className="p-8 max-w-6xl mx-auto">
            <div className="text-center mb-12 mt-8">
                <h1 className="text-4xl font-bold text-darkGreen mb-4">Friends to keep close in your life</h1>
                <p className="text-gray-500 mb-8 max-w-lg mx-auto">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
                <button className="bg-darkGreen text-white px-6 py-2 rounded-md font-semibold">
                    + Add a Friend
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                    <h2 className="text-3xl font-bold text-darkGreen mb-2">{friends.length}</h2>
                    <p className="text-gray-500 text-sm">Total Friends</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                    <h2 className="text-3xl font-bold text-darkGreen mb-2">
                        {friends.filter(f => f.status === 'on-track').length}
                    </h2>
                    <p className="text-gray-500 text-sm">On Track</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                    <h2 className="text-3xl font-bold text-darkGreen mb-2">
                        {friends.filter(f => f.status === 'overdue' || f.status === 'almost due').length}
                    </h2>
                    <p className="text-gray-500 text-sm">Need Attention</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                    <h2 className="text-3xl font-bold text-darkGreen mb-2">12</h2>
                    <p className="text-gray-500 text-sm">Interactions This Month</p>
                </div>
            </div>

            <h2 className="text-xl font-bold text-darkGreen mb-6">Your Friends</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {friends.map(friend => (
                    <FriendCard key={friend.id} friend={friend} />
                ))}
            </div>
        </div>
    )
}

export default Home