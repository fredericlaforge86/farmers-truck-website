import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllSlugs, getPostBySlug, getPostContent, getPostsByPillar } from '@/lib/blog'

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: 'Not Found' }

  return {
    title: `${post.title} - Farmers' Truck Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const contentHtml = await getPostContent(post.content)
  const relatedPosts = post.pillar
    ? getPostsByPillar(post.pillar).filter((p) => p.slug !== post.slug).slice(0, 3)
    : []

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-ft-orange">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-ft-orange">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{post.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <span className="text-ft-orange text-sm font-medium uppercase tracking-wide">
          {post.category}
        </span>
        <h1 className="text-4xl font-bold text-ft-green mt-2 mb-4">{post.title}</h1>
        <p className="text-gray-500">{post.date}</p>
      </header>

      {/* Content */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold text-ft-green mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="p-4 border rounded hover:shadow transition"
              >
                <h3 className="font-semibold hover:text-ft-green">{related.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{related.excerpt.slice(0, 80)}...</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Back Link */}
      <div className="mt-8">
        <Link href="/blog" className="text-ft-orange hover:text-ft-green font-medium">
          ← Back to all articles
        </Link>
      </div>
    </article>
  )
}
