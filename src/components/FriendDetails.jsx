import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'
import { Phone, MessageSquare, Video, Clock, Archive, Trash2 } from 'lucide-react'

const FriendDetails = () => {
    const { id } = useParams()
    const [friend, setFriend] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/friends.json')
            .then(res => res.json())
            .then(data => {
                const foundFriend = data.find(f => f.id === parseInt(id))
                setFriend(foundFriend)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }, [id])

    if (loading) {
        return (
            <div className="min-h-[60vh] flex justify-center items-center">
                <div className="w-12 h-12 border-4 border-darkGreen border-t-transparent rounded-full animate-spin"></div>
            </div>
        )
    }

    if (!friend) {
        return (
            <div className="text-center mt-20 min-h-[50vh]">
                <h2 className="text-2xl font-bold text-darkGreen">Friend not found</h2>
                <Link to="/" className="text-darkGreen underline mt-4 inline-block">Go back home</Link>
            </div>
        )
    }

    let statusColor = 'bg-gray-200 text-gray-800'
    if (friend.status === 'overdue') statusColor = 'bg-danger text-white'
    else if (friend.status === 'almost due') statusColor = 'bg-warning text-white'
    else if (friend.status === 'on-track') statusColor = 'bg-success text-white'

    return (
        <div className="p-8 max-w-5xl mx-auto mt-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="md:col-span-1 space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <img src={friend.picture} alt={friend.name} className="w-24 h-24 rounded-full mb-4 object-cover" />
                        <h2 className="text-2xl font-bold text-darkGreen mb-2">{friend.name}</h2>
                        <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 ${statusColor}`}>
                            {friend.status}
                        </div>
                        <div className="flex gap-2 flex-wrap justify-center mb-4">
                            {friend.tags.map((tag, index) => (
                                <span key={index} className="bg-lightGreen text-darkGreen text-xs px-2 py-1 rounded-full font-semibold uppercase">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-500 italic mb-2">"{friend.bio}"</p>
                        <p className="text-sm text-gray-400">Preferred: {friend.email}</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                        <button className="flex items-center justify-center gap-2 p-4 border-b border-gray-100 hover:bg-gray-50 text-gray-600 font-semibold cursor-pointer">
                            <Clock size={18} /> Snooze 2 Weeks
                        </button>
                        <button className="flex items-center justify-center gap-2 p-4 border-b border-gray-100 hover:bg-gray-50 text-gray-600 font-semibold cursor-pointer">
                            <Archive size={18} /> Archive
                        </button>
                        <button className="flex items-center justify-center gap-2 p-4 hover:bg-red-50 text-danger font-semibold cursor-pointer">
                            <Trash2 size={18} /> Delete
                        </button>
                    </div>
                </div>

                <div className="md:col-span-2 space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <h3 className="text-3xl font-bold text-darkGreen mb-1">{friend.days_since_contact}</h3>
                            <p className="text-gray-500 text-sm">Days Since Contact</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <h3 className="text-3xl font-bold text-darkGreen mb-1">{friend.goal}</h3>
                            <p className="text-gray-500 text-sm">Goal (Days)</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <h3 className="text-xl font-bold text-darkGreen mb-1 mt-1">{friend.next_due_date}</h3>
                            <p className="text-gray-500 text-sm mt-2">Next Due</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-lg text-darkGreen mb-1">Relationship Goal</h3>
                            <p className="text-gray-500">Connect every <span className="font-bold text-darkGreen">{friend.goal} days</span></p>
                        </div>
                        <button className="border border-gray-200 px-4 py-2 rounded-md font-semibold text-gray-600 hover:bg-gray-50 cursor-pointer">
                            Edit
                        </button>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg text-darkGreen mb-4">Quick Check-In</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <button className="flex flex-col items-center justify-center gap-2 p-6 border border-gray-100 rounded-lg hover:bg-lightGreen text-gray-600 hover:text-darkGreen transition-colors cursor-pointer">
                                <Phone size={24} />
                                <span className="font-semibold">Call</span>
                            </button>
                            <button className="flex flex-col items-center justify-center gap-2 p-6 border border-gray-100 rounded-lg hover:bg-lightGreen text-gray-600 hover:text-darkGreen transition-colors cursor-pointer">
                                <MessageSquare size={24} />
                                <span className="font-semibold">Text</span>
                            </button>
                            <button className="flex flex-col items-center justify-center gap-2 p-6 border border-gray-100 rounded-lg hover:bg-lightGreen text-gray-600 hover:text-darkGreen transition-colors cursor-pointer">
                                <Video size={24} />
                                <span className="font-semibold">Video</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FriendDetails