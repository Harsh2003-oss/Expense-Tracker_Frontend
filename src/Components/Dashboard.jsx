import React, { useState, useEffect } from 'react'

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    // Navigate to login - you'll need to implement this
    window.location.href = '/login'
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome, {user?.name || 'User'}!
            </h1>
            <p className="text-gray-600 mt-1">Manage your expenses efficiently</p>
          </div>
          <button 
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Add Expense Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Expense</h2>
        <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Description"
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          <input
            type="number"
            placeholder="Amount"
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          <select className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="entertainment">Entertainment</option>
            <option value="utilities">Utilities</option>
            <option value="other">Other</option>
          </select>
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Add Expense
          </button>
        </form>
      </div>

      {/* Expenses List */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Expenses</h2>
        
        {/* Sample expense - replace with real data later */}
        <div className="space-y-3">
          <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-800">Lunch at Restaurant</h3>
              <p className="text-sm text-gray-600">Food • Today</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-lg font-semibold text-gray-800">₹250</span>
              <button className="text-blue-500 hover:text-blue-700 text-sm">Edit</button>
              <button className="text-red-500 hover:text-red-700 text-sm">Delete</button>
            </div>
          </div>
          
          <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-800">Bus Ticket</h3>
              <p className="text-sm text-gray-600">Transport • Yesterday</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-lg font-semibold text-gray-800">₹50</span>
              <button className="text-blue-500 hover:text-blue-700 text-sm">Edit</button>
              <button className="text-red-500 hover:text-red-700 text-sm">Delete</button>
            </div>
          </div>
        </div>

        {/* Empty state */}
        <div className="text-center py-8 text-gray-500">
          <p>No expenses yet. Add your first expense above!</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard