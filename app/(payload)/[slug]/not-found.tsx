import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-700 w-full">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <div className="space-y-2 mb-8">
          <h2 className="text-2xl font-semibold text-white">page not found</h2>
          <p className="text-yellow-400 text-2xl font-bold">
            oops! looks like you've ventured into an uncharted territory :)
          </p>
        </div>
        <Link
          href="/"
          className="inline-block bg-black text-white text-lg font-bold px-10 py-5 rounded-lg hover:bg-gray-800 transition-colors border-2 border-white"
        >
          Rescue Me!
        </Link>
      </div>
    </div>
  );
}
