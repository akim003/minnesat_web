import Image from "next/image"
import Link from "next/link"
import type { BlogPost } from "@/data/blog-posts"

interface BlogPostCardProps {
  post: BlogPost
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="block bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-[1.02] cursor-pointer"
    >
      <div className="relative h-48">
        <Image
          src={post.imageUrl || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-white/60">{post.date}</span>
          <span className="text-xs text-white/60">{post.author}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{post.title}</h3>
        <p className="text-white/80 mb-4">{post.excerpt}</p>
        <div className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors">
          Read More
        </div>
      </div>
    </Link>
  )
}
