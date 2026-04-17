import { Link } from 'react-router'

const FriendCard = ({ friend }) => {
    let statusColor = 'bg-gray-200 text-gray-800'

    if (friend.status === 'overdue') {
        statusColor = 'bg-danger text-white'
    } else if (friend.status === 'almost due') {
        statusColor = 'bg-warning text-white'
    } else if (friend.status === 'on-track') {
        statusColor = 'bg-success text-white'
    }

    return (
        <Link to={`/friend/${friend.id}`} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
            <img src={friend.picture} alt={friend.name} className="w-20 h-20 rounded-full mb-4 object-cover" />
            <h3 className="font-bold text-lg text-darkGreen">{friend.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{friend.days_since_contact}d ago</p>

            <div className="flex gap-2 mb-4 flex-wrap justify-center">
                {friend.tags.map((tag, index) => (
                    <span key={index} className="bg-lightGreen text-darkGreen text-xs px-2 py-1 rounded-full font-semibold uppercase">
                        {tag}
                    </span>
                ))}
            </div>

            <div className={`px-4 py-1 rounded-full text-xs font-bold uppercase ${statusColor}`}>
                {friend.status}
            </div>
        </Link>
    )
}

export default FriendCard