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
  },
  {
    slug: 'mobile-markets-for-hospitals',
    title: 'Mobile Markets for Healthcare',
    description: 'Partnerships, community benefit, and clinical integration',
  },
  {
    slug: 'how-to-start-a-mobile-market',
    title: 'How to Start a Mobile Market',
    description: 'Step-by-step guide from planning to launch',
  },
  {
    slug: 'mobile-grocery-store-model',
    title: 'Mobile Grocery Store Model',
    description: 'Commercial strategies for grocers and food hubs',
  },
  {
    slug: 'funding-mobile-markets',
    title: 'Funding Mobile Markets',
    description: 'Grants, partnerships, and sustainability',
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
    <div className="min-h-screen bg-ft-cream">
      {/* Hero */}
      <section className="bg-ft-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl italic mb-4">Mobile Market Resources</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Expert guides on starting, funding, and operating mobile markets.
            Written for food banks, hospitals, cities, and grocers.
          </p>
        </div>
      </section>

      {/* Pillar Guides */}
      <section className="py-12 bg-ft-gold">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-2xl italic text-ft-cream mb-6">Comprehensive Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => {
              return (
                <Link
                  key={pillar.slug}
                  href={`/blog/${pillar.slug}`}
                  className="block bg-white p-6 rounded-lg hover:shadow-lg transition"
                >
                  <span className="text-xs text-ft-red font-semibold uppercase tracking-wide">
                    Pillar Guide
                  </span>
                  <h3 className="font-serif text-xl text-ft-navy mt-2 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-ft-gray text-sm">{pillar.description}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* All Articles by Category */}
      <section className="py-12 bg-ft-cream">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-2xl italic text-ft-navy mb-8">All Articles</h2>

          {categories.map((category) => {
            const categoryPosts = regularPosts.filter(p => p.category === category)
            return (
              <div key={category} className="mb-12">
                <h3 className="text-lg font-semibold text-ft-red mb-4 pb-2 border-b border-gray-200">
                  {category} ({categoryPosts.length})
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryPosts.map((post) => (
                    <article
                      key={post.slug}
                      className="bg-white rounded-lg p-5 hover:shadow-md transition"
                    >
                      <h4 className="font-serif text-lg text-ft-navy mb-2">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="hover:text-ft-red transition"
                        >
                          {post.title}
                        </Link>
                      </h4>
                      <p className="text-ft-gray text-sm line-clamp-2">{post.excerpt}</p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-ft-red text-sm font-medium hover:underline mt-2 inline-block"
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
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl italic text-ft-navy mb-4">
            Ready to Start Your Mobile Market?
          </h2>
          <p className="text-ft-gray mb-6">
            We're happy to discuss your specific situation and help you figure out next steps.
          </p>
          <Link
            href="https://meetings.hubspot.com/fred9/pd-booking"
            target="_blank"
            className="inline-block bg-ft-red text-white px-8 py-3 rounded-md font-medium hover:bg-red-800 transition"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </div>
  )
}
