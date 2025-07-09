import React from 'react'
import { Link } from 'react-router-dom'
const SideBar = () => {
  return (
    <div className="w-full md:w-64 border-l-4 border-orange-500 bg-gray-100 p-6 font-mono">
      <h3 className="text-lg font-bold mb-4">Features</h3>
      <ul className="space-y-2 text-base text-gray-800">
        <li>
          <span className="mr-2">-</span>
          <Link to="/otp-validator" className="hover:underline">
            OTP Validator
          </Link>
        </li>
        <li>
          <span className="mr-2">-</span>
          <Link to="/progress-bar" className="hover:underline">
            Progress Bar
          </Link>
        </li>
        {/* <li>
          <span className="mr-2">-</span>
          <Link to="/comment-box" className="hover:underline">
            Comment Box
          </Link>
        </li>
        <li>
          <span className="mr-2">-</span>
          <Link to="/todo-list" className="hover:underline">
            To-Do List
          </Link>
        </li> */}
      </ul>
    </div>
  )
}

export default SideBar