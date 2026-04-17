import { useOutletContext, Link } from 'react-router'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const Stats = () => {
    const { timelineEntries } = useOutletContext()

    let callCount = 0;
    let textCount = 0;
    let videoCount = 0;

    for (let i = 0; i < timelineEntries.length; i++) {
        if (timelineEntries[i].type === 'Call') {
            callCount = callCount + 1;
        } else if (timelineEntries[i].type === 'Text') {
            textCount = textCount + 1;
        } else if (timelineEntries[i].type === 'Video') {
            videoCount = videoCount + 1;
        }
    }

    const chartData = [
        { name: 'Call', value: callCount, color: '#234f3c' },
        { name: 'Text', value: textCount, color: '#8b5cf6' },
        { name: 'Video', value: videoCount, color: '#4caf50' }
    ];

    const finalData = [];
    for (let i = 0; i < chartData.length; i++) {
        if (chartData[i].value > 0) {
            finalData.push(chartData[i]);
        }
    }

    return (
        <div className="p-8 max-w-4xl mx-auto mt-8 min-h-[60vh]">
            <h1 className="text-3xl font-bold text-darkGreen mb-6">Friendship Analytics</h1>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-gray-500 font-semibold mb-8">By Interaction Type</h2>

                {finalData.length === 0 ? (
                    <div className="text-center text-gray-400 py-12">
                        <p>No data yet.</p>
                        <Link to="/" className="text-darkGreen underline mt-2 inline-block">
                            Go interact with a friend!
                        </Link>
                    </div>
                ) : (
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={finalData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={120}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {finalData.map((entry, index) => (
                                        <Cell key={index} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="bottom" height={36} iconType="circle" />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Stats