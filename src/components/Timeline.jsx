import { useState } from 'react'
import { useOutletContext } from 'react-router'
import { Phone, MessageSquare, Video } from 'lucide-react'

const Timeline = () => {
    const { timelineEntries } = useOutletContext()

    const [filter, setFilter] = useState('All')

    let filteredEntries = timelineEntries;
    if (filter !== 'All') {
        filteredEntries = timelineEntries.filter(entry => entry.type === filter)
    }

    const getIcon = (type) => {
        if (type === 'Call') {
            return <Phone size={20} className="text-darkGreen" />
        } else if (type === 'Text') {
            return <MessageSquare size={20} className="text-gray-500" />
        } else if (type === 'Video') {
            return <Video size={20} className="text-blue-600" />
        }
    }

    return (
        <div className="p-8 max-w-4xl mx-auto mt-8 min-h-[60vh]">
            <h1 className="text-3xl font-bold text-darkGreen mb-6">Timeline</h1>

            <div className="mb-8">
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 bg-white"
                >
                    <option value="All">Filter timeline...</option>
                    <option value="Call">Calls only</option>
                    <option value="Text">Texts only</option>
                    <option value="Video">Video only</option>
                </select>
            </div>

            <div className="space-y-4">
                {filteredEntries.length === 0 ? (
                    <div className="text-center p-12 bg-white rounded-xl border border-gray-100 shadow-sm text-gray-500">
                        No interactions found. Go to a friend's page to log a check-in!
                    </div>
                ) : (
                    filteredEntries.map((entry) => (
                        <div key={entry.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4">

                            <div className="w-12 h-12 bg-lightGreen rounded-full flex items-center justify-center shrink-0">
                                {getIcon(entry.type)}
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-800">
                                    {entry.type} <span className="font-normal text-gray-500">with {entry.friendName}</span>
                                </h3>
                                <p className="text-sm text-gray-400">{entry.date}</p>
                            </div>

                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Timeline