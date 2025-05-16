import { blogPosts } from "@/data/blog-posts"
import { BlogPostCard } from "@/components/blog-post-card"

export const metadata = {
  title: "MinneSat Blog - University of Minnesota Engineering Team News",
  description:
    "Latest news, updates, and stories from the University of Minnesota's MinneSat team and other UMN engineering clubs",
}

export default function BlogPage() {
  // Get the most recent post as featured
  const featuredPost = blogPosts[0]
  // Display remaining posts
  const regularPosts = blogPosts.slice(1)

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-maroon/20 px-3 py-1 text-sm text-maroon mb-4">Our Stories</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">MinneSat Blog</h1>
          <div className="w-20 h-1 bg-gold mb-6 mx-auto"></div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Stay updated with the latest news, competition results, and behind-the-scenes stories from the MinneSat team
            and other UMN engineering clubs.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <BlogPostCard post={featuredPost} featured={true} />
        </div>

        {/* Post Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-maroon hover:bg-maroon/90 text-white px-4 py-2 rounded-full text-sm font-medium">
            All Posts
          </button>
          <button className="bg-zinc-800 hover:bg-zinc-700 text-white/80 hover:text-white px-4 py-2 rounded-full text-sm font-medium">
            Competition
          </button>
          <button className="bg-zinc-800 hover:bg-zinc-700 text-white/80 hover:text-white px-4 py-2 rounded-full text-sm font-medium">
            Engineering
          </button>
          <button className="bg-zinc-800 hover:bg-zinc-700 text-white/80 hover:text-white px-4 py-2 rounded-full text-sm font-medium">
            Team Updates
          </button>
        </div>

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  )
}
