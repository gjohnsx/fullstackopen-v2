import { useState } from 'react'
import Stats from './components/Stats';

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick} className='px-3 py-1 rounded bg-white text-indigo-600 text-lg hover:bg-gray-200'>
      {text}
    </button>
  )
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div className='m-10'>
      <h1 className='text-3xl font-bold text-white'>Give Feedback</h1>

      <div className='flex gap-2 my-4'>
        <Button handleClick={() => setGood(prevGood => prevGood + 1)} text='Good' />
        <Button handleClick={() => setNeutral(prevNeutral => prevNeutral + 1)} text='Neutral' />
        <Button handleClick={() => setBad(prevBad => prevBad + 1)} text='Bad' />
      </div>

      <Stats good={good} neutral={neutral} bad={bad} />

      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-500">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">
                      Feedback
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                      Quantity
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 bg-gray-300">
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      Good
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{good}</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      Neutral
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{neutral}</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      Bad
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{bad}</td>
                  </tr>
                </tbody>

                <tfoot className='bg-gray-500'>
                  <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">
                        Total
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                        {good + neutral + bad}
                      </th>
                    </tr>
                </tfoot>

              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App