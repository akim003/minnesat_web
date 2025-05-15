import { blogPosts } from "@/data/blog-posts"
import { BlogPostCard } from "@/components/blog-post-card"

export const metadata = {
  title: "MinneSat Blog",
  description: "Latest news, updates, and stories from the MinneSat team",
}

export default function BlogPage() {
  // Only use the first blog post
  const displayedPosts = blogPosts.slice(0, 1)

  return (
    <main className="min-h-screen bg-black text-white pt-8">
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">MinneSat Blog</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Stay updated with the latest news, competition results, and behind-the-scenes stories from the MinneSat
            team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  )
}
