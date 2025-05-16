import Image from "next/image"
import Link from "next/link"
import type { BlogPost } from "@/data/blog-posts"
import { Calendar, User, ArrowRight } from "lucide-react"

interface BlogPostCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogPostCard({ post, featured = false }: BlogPostCardProps) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className={`group block bg-zinc-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-maroon/20 border border-maroon/20 hover:border-maroon/40 ${
        featured ? "md:col-span-2 lg:col-span-3" : ""
      }`}
    >
      <div className={`relative ${featured ? "h-64 md:h-80" : "h-48"}`}>
        <Image
          src={post.imageUrl || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={
            featured ? "(max-width: 768px) 100vw, 100vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>

        {featured && (
          <div className="absolute bottom-0 left-0 w-full p-6 z-10">
            <span className="inline-block bg-maroon text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Featured
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">{post.title}</h3>
            <p className="text-white/90 line-clamp-2 mb-2 max-w-2xl">{post.excerpt}</p>
          </div>
        )}
      </div>

      {!featured && (
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 2).map((tag, index) => (
              <span key={index} className="text-xs bg-maroon/20 text-gold px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gold transition-colors">{post.title}</h3>
          <p className="text-white/80 mb-4 line-clamp-2">{post.excerpt}</p>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-xs text-gold/80">
              <div className="flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User className="h-3 w-3 mr-1" />
                <span>{post.author}</span>
              </div>
            </div>

            <span className="inline-flex items-center text-gold font-medium text-sm group-hover:translate-x-1 transition-transform">
              Read <ArrowRight className="h-3 w-3 ml-1" />
            </span>
          </div>
        </div>
      )}
    </Link>
  )
}
