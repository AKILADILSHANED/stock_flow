import React from 'react'

function Access_Denied() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Card container with subtle shadow and rounded corners */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8 text-center transition-all duration-300 hover:shadow-2xl">
            {/* Icon container with gradient and pulse animation */}
            <div className="relative mx-auto w-24 h-24 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-10 animate-ping" />
              <div className="relative flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-50 to-orange-50 rounded-full border-2 border-red-200">
                <svg
                  className="w-12 h-12 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              Access Denied
            </h1>

            {/* Subtitle / description */}
            <p className="text-gray-600 mb-8 leading-relaxed">
              You don't have permission to access this page. Please contact your
              administrator or try logging in with a different account.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.history.back()}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg shadow-md hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Go Back
              </button>
              <button
                onClick={() => (window.location.href = '/')}
                className="px-6 py-2.5 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 shadow-sm hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-200"
              >
                Return Home
              </button>
            </div>

            {/* Decorative footer note */}
            <p className="mt-8 text-xs text-gray-400">
              Error code: 403 Forbidden
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Access_Denied