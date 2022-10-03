const Button = ({ handleClick, text }) => {
    return (
      <button onClick={handleClick} className='px-3 py-1 rounded bg-white text-indigo-600 text-lg hover:bg-gray-200'>
        {text}
      </button>
    )
};

export default Button;