import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-ft-cream py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ft-green mb-4">
            Mobile Market Solutions
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Custom refrigerated trucks bringing fresh food to communities.
            Serving hospitals, cities, food banks, grocers, and community organizations.
          </p>
          <div className="space-x-4">
            <a
              href="https://farmerstruck.com"
              className="inline-block bg-ft-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-ft-green transition"
            >
              Learn More
            </a>
            <Link
              href="/blog"
              className="inline-block border-2 border-ft-green text-ft-green px-6 py-3 rounded-lg font-semibold hover:bg-ft-green hover:text-white transition"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-ft-green mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.slug} className="border rounded-lg p-6 hover:shadow-lg transition">
                <span className="text-sm text-ft-orange font-medium">{post.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-ft-green">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">{post.excerpt}</p>
                <p className="text-gray-400 text-xs mt-4">{post.date}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="text-ft-orange hover:text-ft-green font-semibold"
            >
              View All Articles →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
