import { blogPosts } from "@/data/blog-posts"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
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

  // Enhanced markdown to HTML converter
  const formatContent = (content: string) => {
    // Process the content line by line
    const lines = content.split("\n")
    let html = ""
    let inParagraph = false

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()

      // Skip empty lines
      if (line === "") {
        if (inParagraph) {
          html += "</p>\n"
          inParagraph = false
        }
        continue
      }

      // Process headings
      if (line.startsWith("# ")) {
        if (inParagraph) {
          html += "</p>\n"
          inParagraph = false
        }
        const headingText = line.substring(2)
        html += `<h1 class="text-3xl font-bold my-6">${headingText}</h1>\n`
        continue
      }

      if (line.startsWith("## ")) {
        if (inParagraph) {
          html += "</p>\n"
          inParagraph = false
        }
        const headingText = line.substring(3)
        html += `<h2 class="text-2xl font-bold my-5">${headingText}</h2>\n`
        continue
      }

      if (line.startsWith("### ")) {
        if (inParagraph) {
          html += "</p>\n"
          inParagraph = false
        }
        const headingText = line.substring(4)
        html += `<h3 class="text-xl font-bold my-4">${headingText}</h3>\n`
        continue
      }

      // Process regular text as paragraphs
      if (!inParagraph) {
        html += '<p class="my-4">'
        inParagraph = true
      } else {
        html += " "
      }

      // Add the line content
      html += line
    }

    // Close any open paragraph
    if (inParagraph) {
      html += "</p>\n"
    }

    return html
  }

  return (
    <main className="min-h-screen bg-black text-white pt-8">
      <div className="container mx-auto py-8 px-4">
        <Link href="/blog" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Blog
        </Link>

        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center text-white/60 gap-4 mb-6">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
          </div>

          <div className="relative h-96 mb-8">
            <Image
              src={post.imageUrl || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />
        </article>
      </div>
    </main>
  )
}
