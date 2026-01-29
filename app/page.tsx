import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-ft-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-4xl mb-4">🍎</div>
            <h1 className="font-serif text-4xl md:text-5xl italic text-ft-navy mb-6 leading-tight">
              Making Fresh, Accessible Food a Reality in Every Community.
            </h1>
            <p className="text-ft-gray text-lg mb-8 leading-relaxed">
              The Farmers' Truck is a social enterprise on a mission to empower food security champions.
              Our goal is fresh, accessible food in every community across North America. We are proud to
              have partnered with many mobile produce market programs through our proven mobile market
              vehicle solution.
            </p>
            <Link
              href="/solutions"
              className="inline-block bg-ft-red text-white px-8 py-4 rounded-md font-medium hover:bg-red-800 transition text-lg"
            >
              Our Solutions
            </Link>
          </div>
          <div className="hidden md:block">
            {/* Placeholder for illustration - you can add an image here */}
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center text-gray-400">
              [Mobile Market Illustration]
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-ft-cream rounded-full h-72 w-72 mx-auto flex items-center justify-center">
              {/* Placeholder for illustration */}
              <span className="text-gray-400">[Illustration]</span>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="text-3xl mb-4">🥕</div>
            <h2 className="font-serif text-3xl md:text-4xl italic text-ft-navy mb-6">
              What is the problem?
            </h2>
            <p className="text-ft-gray mb-6 leading-relaxed">
              Healthy food access is an issue across North America. Organizations need better tools to
              serve their community where they live and work. This is why many organizations are
              launching mobile produce markets. Mobile produce markets, also known as mobile Farmers' Trucks:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-ft-red mr-3">✓</span>
                <span className="text-ft-gray">Bring fresh, healthy food to underserved communities.</span>
              </li>
              <li className="flex items-start">
                <span className="text-ft-red mr-3">✓</span>
                <span className="text-ft-gray">Are a cost-effective alternative.</span>
              </li>
              <li className="flex items-start">
                <span className="text-ft-red mr-3">✓</span>
                <span className="text-ft-gray">Bring food to communities in a dignified way.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-ft-cream">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-3xl mb-4">🍌</div>
            <h2 className="font-serif text-3xl md:text-4xl italic text-ft-navy mb-6">
              What is the solution?
            </h2>
            <p className="text-ft-gray mb-6 leading-relaxed">
              The Farmers' Truck provides purpose-built, turn-key mobile market trucks. One of our turn-key
              vehicles can serve up to 150 families every week through an accessible, dignified, and
              festive food shopping experience.
            </p>
            <Link
              href="/about"
              className="inline-block bg-ft-red text-white px-8 py-4 rounded-md font-medium hover:bg-red-800 transition"
            >
              About Us
            </Link>
          </div>
          <div>
            {/* Placeholder for truck illustration */}
            <div className="bg-white rounded-lg h-72 flex items-center justify-center text-gray-400 shadow-sm">
              [Truck Illustration]
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-ft-gold">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl italic text-ft-cream text-center mb-12">
            Our Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Farmers' Truck */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400">
                [Farmers' Truck Image]
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-ft-navy mb-2">The Farmers' Truck</h3>
                <p className="text-ft-gray text-sm mb-4">Full-size mobile market for high-volume community programs.</p>
                <Link href="/solutions#farmers-truck" className="text-ft-red font-medium hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
            {/* Pantry Truck */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400">
                [Pantry Truck Image]
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-ft-navy mb-2">The Pantry Truck</h3>
                <p className="text-ft-gray text-sm mb-4">Compact solution for food pantry and distribution programs.</p>
                <Link href="/solutions#pantry-truck" className="text-ft-red font-medium hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
            {/* Cherry Truck */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400">
                [Cherry Truck Image]
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-ft-navy mb-2">The Cherry Truck</h3>
                <p className="text-ft-gray text-sm mb-4">Entry-level mobile market for smaller organizations.</p>
                <Link href="/solutions#cherry-truck" className="text-ft-red font-medium hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 bg-ft-cream">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl italic text-ft-navy mb-8">Latest from Our Blog</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                <div className="p-6">
                  <span className="text-sm text-ft-red font-medium">{post.category}</span>
                  <h3 className="font-serif text-xl text-ft-navy mt-2 mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-ft-red transition">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-ft-gray text-sm line-clamp-3">{post.excerpt}</p>
                  <p className="text-gray-400 text-xs mt-4">{post.date}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-block bg-ft-red text-white px-8 py-3 rounded-md font-medium hover:bg-red-800 transition"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl italic text-ft-navy mb-6">
            Ready to bring fresh food to your community?
          </h2>
          <p className="text-ft-gray mb-8">
            Contact our Program Development Team to get started!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-ft-red text-white px-8 py-4 rounded-md font-medium hover:bg-red-800 transition text-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
