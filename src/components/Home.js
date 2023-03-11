import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='items-center bg-gray-600 text-center p-2'>
        <button className='mx-2 text-blue-50 p-2 bg-gray-800 rounded-md'>
            <Link to='/login'>Login</Link>
        </button>
        <button className='mx-2 text-blue-50 p-2 bg-gray-800 rounded-md'>
            <Link to='/signup'>SignUp</Link>
        </button>
        <button className='mx-2 text-blue-50 p-2 bg-gray-800 rounded-md'>
            <Link to='/details'>Details</Link>
        </button>
    </div>
  )
}

export default Home