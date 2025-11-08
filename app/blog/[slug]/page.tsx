import { blogPosts } from "@/data/blog-posts"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Tag, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((post) => post.id === params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found",
    }
  }

  return {
    title: `${post.title} | MinneSat Blog`,
    description: post.excerpt,
  }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.id === params.slug)

  if (!post) {
    notFound()
  }

  // Enhanced markdown to HTML converter.
  const formatContent = (content: string) => {
    // Process the content line by line
    const lines = content.split("\n")
    let html = ""
    let inParagraph = false
    let inList = false

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()

      // Skip empty lines
      if (line === "") {
        if (inParagraph) {
          html += "</p>\n"
          inParagraph = false
        }
        if (inList) {
          html += "</ul>\n"
          inList = false
        }
        continue
      }

      // Process headings
      if (line.startsWith("# ")) {
        if (inParagraph) {
          html += "</p>\n"
          inParagraph = false
        }
        if (inList) {
          html += "</ul>\n"
          inList = false
        }
        const headingText = line.substring(2)
        html += `<h1 class="text-3xl font-bold my-8 text-white">${headingText}</h1>\n`
        continue
      }

      if (line.startsWith("## ")) {
        if (inParagraph) {
          html += "</p>\n"
          inParagraph = false
        }
        if (inList) {
          html += "</ul>\n"
          inList = false
        }
        const headingText = line.substring(3)
        html += `<h2 class="text-2xl font-bold mt-10 mb-6 text-gold">${headingText}</h2>\n`
        continue
      }

      if (line.startsWith("### ")) {
        if (inParagraph) {
          html += "</p>\n"
          inParagraph = false
        }
        if (inList) {
          html += "</ul>\n"
          inList = false
        }
        const headingText = line.substring(4)
        html += `<h3 class="text-xl font-bold mt-8 mb-4 text-white">${headingText}</h3>\n`
        continue
      }

      // Process list items
      if (line.startsWith("- ")) {
        if (inParagraph) {
          html += "</p>\n"
          inParagraph = false
        }

        if (!inList) {
          html += '<ul class="list-disc pl-6 my-4 space-y-2 text-white/90">\n'
          inList = true
        }

        const listItemText = line.substring(2)
        html += `<li>${processMarkdownLinks(listItemText)}</li>\n`
        continue
      }

      // Process regular text as paragraphs
      if (!inParagraph && !inList) {
        html += '<p class="my-4 text-white/90 leading-relaxed">'
        inParagraph = true
      } else if (inParagraph) {
        html += " "
      }

      // Add the line content if in paragraph
      if (inParagraph) {
        html += processMarkdownLinks(line)
      }
    }

    // Close any open paragraph or list
    if (inParagraph) {
      html += "</p>\n"
    }
    if (inList) {
      html += "</ul>\n"
    }

    return html
  }

  // Process markdown links [text](url)
  const processMarkdownLinks = (text: string) => {
    let result = text
    let linkMatch
    const linkRegex = /\[([^\]]+)\]$$([^)]+)$$/g

    while ((linkMatch = linkRegex.exec(text)) !== null) {
      const [fullMatch, linkText, url] = linkMatch
      const isExternal = url.startsWith("http")

      let replacement
      if (isExternal) {
        replacement = `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-gold hover:text-gold/80 transition-colors">${linkText}</a>`
      } else {
        replacement = `<a href="${url}" class="text-gold hover:text-gold/80 transition-colors">${linkText}</a>`
      }

      result = result.replace(fullMatch, replacement)
    }

    return result
  }

  // Get related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .filter((p) => p.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 2)

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src={post.imageUrl || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

        <div className="absolute bottom-0 left-0 w-full container mx-auto px-4 py-12">
          <Link href="/blog" className="inline-flex items-center text-gold hover:text-gold/80 mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white max-w-4xl">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-white/80 mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-gold" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2 text-gold" />
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-8">
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div
                className="prose prose-invert prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center flex-wrap gap-2">
                  <Tag className="h-4 w-4 text-gold mr-2" />
                  {post.tags.map((tag, index) => (
                    <span key={index} className="text-sm bg-maroon/20 text-gold px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-8">Related Posts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.id}`}
                      className="group block bg-zinc-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-maroon/30 transition-all"
                    >
                      <div className="relative h-40">
                        <Image
                          src={relatedPost.imageUrl || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-lg font-bold mb-2 group-hover:text-gold transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-white/70 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 sticky top-24">
              <h3 className="text-xl font-bold mb-6 pb-4 border-b border-white/10">Recent Posts</h3>
              <div className="space-y-6">
                {blogPosts.slice(0, 4).map((recentPost) => (
                  <Link
                    key={recentPost.id}
                    href={`/blog/${recentPost.id}`}
                    className={`flex items-center gap-4 group ${recentPost.id === post.id ? "opacity-60" : ""}`}
                  >
                    <div className="relative h-16 w-16 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={recentPost.imageUrl || "/placeholder.svg"}
                        alt={recentPost.title}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <h4
                        className={`font-medium line-clamp-2 group-hover:text-gold transition-colors ${recentPost.id === post.id ? "text-white/70" : "text-white"}`}
                      >
                        {recentPost.title}
                      </h4>
                      <span className="text-xs text-white/60">{recentPost.date}</span>
                    </div>
                  </Link>
                ))}
              </div>

              <h3 className="text-xl font-bold mt-10 mb-6 pb-4 border-b border-white/10">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(blogPosts.flatMap((p) => p.tags)))
                  .slice(0, 8)
                  .map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm bg-zinc-800 hover:bg-maroon/20 text-white/80 hover:text-gold px-3 py-1 rounded-full cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
