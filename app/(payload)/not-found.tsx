import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <div className="space-y-2 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            page not found
          </h2>
          <p className="text-gray-600">
            oops! looks like you've ventured into uncharted territory :)
          </p>
        </div>
        <Link
          href="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          take me home
        </Link>
      </div>
    </div>
  );
}
