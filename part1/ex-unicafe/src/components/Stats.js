const Stats = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const average = total > 0 
        ? ((good - bad) / total).toFixed(2)
        : 'No feedback'
    
    return (
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-2">
                    <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                        <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Average</dt>
                        <dd className="order-1 text-5xl font-bold tracking-tight text-indigo-600">{average}</dd>
                    </div>
                    <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                        <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Positive</dt>
                        <dd className="order-1 text-5xl font-bold tracking-tight text-indigo-600">{total > 0 ? ((good / total) * 100).toFixed(2) + '%' : 'No feedback'}</dd>
                    </div>
                </dl>
            </div>
        </div>
    )
};

export default Stats;