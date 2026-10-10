import { Link } from "react-router-dom";

function Notfound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            <div className="text-center">
                {/* Big 404 */}
                <h1 className="text-9xl font-extrabold text-orange-700 tracking-widest">
                    404
                </h1>

                {/* Divider */}
                <div className="bg-orange-700 px-2 text-sm rounded rotate-12 absolute ..."></div>

                {/* Message */}
                <p className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
                    Oops! Page not found
                </p>
                <p className="mt-2 text-gray-500">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                {/* Button */}
                <Link
                    to="/"
                    className="inline-block mt-8 px-6 py-3 text-sm font-medium text-white bg-orange-700 rounded-lg shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
                >
                    ← Back to Login
                </Link>
            </div>
        </div>
    );
}

export default Notfound;