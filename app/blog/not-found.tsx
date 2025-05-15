import Link from "next/link"

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
      <p className="text-xl mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
      <Link
        href="/blog"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
      >
        Return to Blog
      </Link>
    </div>
  )
}
