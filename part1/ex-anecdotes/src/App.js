import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  
  const maxVotes = Math.max(...votes)
  const maxVotesIndex = votes.findIndex(n => n === maxVotes)

  console.log('votes =', maxVotes)
  console.log('index =', maxVotesIndex)

  
  console.log(votes);
  console.log(votes.findIndex(n => n === Math.max(...votes)))

  return (
    <div className="p-6">
      <button 
        onClick={() => setSelected(prevSelected => Math.floor(Math.random() * anecdotes.length))}
        className="border rounded bg-green-500 text-white px-3 py-1 hover:bg-green-600 focus:ring-green-700"
      >
        Random Anecdote
      </button>
      
      <h2 className="font-bold text-3xl">Anecdote of the day</h2>

      <div className="flex flex-col">
        <h3 className="my-2">{anecdotes[selected]}</h3>
        <span className="">{votes[selected]} votes</span>
        <button
          className="border bg-gray-400 hover:bg-gray-500 px-2 py-px rounded w-1/12"  
          onClick={() => setVotes(prevVotes => {
            const votesCopy = [...prevVotes];
            votesCopy[selected] += 1;
            return votesCopy
          })}
        >
          Upvote
        </button>
      </div>
      
      
      <h2 className="font-bold text-3xl">Anecdote with the most votes</h2>
      <div className="flex flex-col">
        <h3 className="my-2">{anecdotes[maxVotesIndex]}</h3>
        <span className="">{maxVotes} votes</span>
      </div>
    </div>
  )
}

export default App
