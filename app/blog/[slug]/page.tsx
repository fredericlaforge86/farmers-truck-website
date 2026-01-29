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
    <div className="bg-ft-cream min-h-screen">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-ft-gray mb-6">
          <Link href="/" className="hover:text-ft-red">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-ft-red">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-ft-navy">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <span className="text-ft-red text-sm font-medium uppercase tracking-wide">
            {post.category}
          </span>
          <h1 className="font-serif text-4xl italic text-ft-navy mt-2 mb-4">{post.title}</h1>
          <p className="text-ft-gray">{post.date}</p>
        </header>

        {/* Content */}
        <div
          className="prose max-w-none bg-white p-8 rounded-lg shadow-sm"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* CTA */}
        <div className="mt-8 p-6 bg-ft-gold rounded-lg text-center">
          <h3 className="font-serif text-xl italic text-ft-navy mb-2">Ready to learn more?</h3>
          <p className="text-ft-navy mb-4">Contact us to discuss your mobile market program.</p>
          <Link
            href="https://meetings.hubspot.com/fred9/pd-booking"
            target="_blank"
            className="inline-block bg-ft-red text-white px-6 py-3 rounded-md font-medium hover:bg-red-800 transition"
          >
            Book a Call
          </Link>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="font-serif text-2xl italic text-ft-navy mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="p-4 bg-white rounded-lg hover:shadow-md transition"
                >
                  <h3 className="font-serif text-lg text-ft-navy hover:text-ft-red">{related.title}</h3>
                  <p className="text-sm text-ft-gray mt-1 line-clamp-2">{related.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back Link */}
        <div className="mt-8">
          <Link href="/blog" className="text-ft-red hover:text-ft-navy font-medium">
            ← Back to all articles
          </Link>
        </div>
      </article>
    </div>
  )
}
