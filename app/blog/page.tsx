import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const metadata = {
  title: "Blog - Farmers' Truck | Mobile Market Guides & Resources",
  description: 'Expert guides on mobile markets, food access, healthcare partnerships, funding strategies, and building sustainable community food systems.',
}

// Define pillar structure for organized display
const pillars = [
  {
    slug: 'what-is-a-mobile-market',
    title: 'What Is a Mobile Market?',
    description: 'Complete guide to costs, operations, and impact',
    category: 'Mobile Markets',
  },
  {
    slug: 'mobile-markets-for-hospitals',
    title: 'Mobile Markets for Healthcare',
    description: 'Partnerships, community benefit, and clinical integration',
    category: 'Healthcare',
  },
  {
    slug: 'how-to-start-a-mobile-market',
    title: 'How to Start a Mobile Market',
    description: 'Step-by-step guide from planning to launch',
    category: 'Implementation',
  },
  {
    slug: 'mobile-grocery-store-model',
    title: 'Mobile Grocery Store Model',
    description: 'Commercial strategies for grocers and food hubs',
    category: 'Commercial',
  },
  {
    slug: 'funding-mobile-markets',
    title: 'Funding Mobile Markets',
    description: 'Grants, partnerships, and sustainability',
    category: 'Funding',
  },
]

export default function BlogPage() {
  const posts = getAllPosts()

  // Separate pillars from regular posts
  const pillarSlugs = pillars.map(p => p.slug)
  const pillarPosts = posts.filter(p => pillarSlugs.includes(p.slug))
  const regularPosts = posts.filter(p => !pillarSlugs.includes(p.slug))

  // Group regular posts by category
  const categories = [...new Set(regularPosts.map((p) => p.category))].sort()

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-800 to-green-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mobile Market Resources</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Expert guides on starting, funding, and operating mobile markets.
            Written for food banks, hospitals, cities, and grocers.
          </p>
        </div>
      </section>

      {/* Pillar Guides */}
      <section className="py-12 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => {
              const post = pillarPosts.find(p => p.slug === pillar.slug)
              return (
                <Link
                  key={pillar.slug}
                  href={`/blog/${pillar.slug}`}
                  className="block bg-white p-6 rounded-lg border-2 border-green-200 hover:border-green-400 hover:shadow-md transition"
                >
                  <span className="text-xs text-green-700 font-medium uppercase tracking-wide">
                    Pillar Guide
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{pillar.description}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* All Articles by Category */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Articles</h2>

          {categories.map((category) => {
            const categoryPosts = regularPosts.filter(p => p.category === category)
            return (
              <div key={category} className="mb-12">
                <h3 className="text-lg font-semibold text-green-700 mb-4 pb-2 border-b border-gray-200">
                  {category} ({categoryPosts.length})
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryPosts.map((post) => (
                    <article
                      key={post.slug}
                      className="border rounded-lg p-5 hover:shadow-md transition"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="hover:text-green-700 transition"
                        >
                          {post.title}
                        </Link>
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-green-700 text-sm font-medium hover:underline mt-2 inline-block"
                      >
                        Read more →
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Mobile Market?
          </h2>
          <p className="text-gray-600 mb-6">
            We're happy to discuss your specific situation and help you figure out next steps.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </div>
  )
}
