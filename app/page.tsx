import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/blog'

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3)

  return (
    <div>
      {/* Hero Section - Full Impact */}
      <section className="relative bg-gradient-to-br from-ft-cream via-white to-ft-cream overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-ft-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-ft-teal/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-ft-red/10 text-ft-red px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-ft-red rounded-full animate-pulse" />
                Serving 50+ communities across North America
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ft-navy mb-6 leading-tight">
                Making Fresh Food <span className="italic text-ft-red">Accessible</span> to Every Community
              </h1>
              <p className="text-ft-gray text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                Purpose-built mobile market trucks bringing healthy, affordable food directly to underserved neighborhoods. We empower food security champions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 bg-ft-red text-white px-8 py-4 rounded-lg font-medium hover:bg-red-800 transition-all hover:shadow-lg hover:shadow-ft-red/25 hover:-translate-y-0.5"
                >
                  Explore Solutions
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-white text-ft-navy px-8 py-4 rounded-lg font-medium border-2 border-ft-navy/20 hover:border-ft-navy hover:bg-ft-navy hover:text-white transition-all"
                >
                  Learn Our Story
                </Link>
              </div>
              {/* Trust badges */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-sm text-ft-gray mb-4">Trusted by healthcare, cities, and community organizations</p>
                <div className="flex items-center gap-8 text-ft-gray/60">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-ft-navy">150+</div>
                    <div className="text-xs">Families served weekly per truck</div>
                  </div>
                  <div className="w-px h-10 bg-gray-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-ft-navy">50+</div>
                    <div className="text-xs">Active programs</div>
                  </div>
                  <div className="w-px h-10 bg-gray-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-ft-navy">10+</div>
                    <div className="text-xs">Years experience</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 bg-gradient-to-br from-ft-gold/30 to-ft-teal/30 rounded-3xl blur-2xl" />
                <div className="relative bg-white rounded-2xl p-4 shadow-2xl">
                  <Image
                    src="/images/truck-hero.png"
                    alt="Farmers' Truck Mobile Market"
                    width={600}
                    height={400}
                    className="rounded-xl w-full h-auto"
                    priority
                  />
                </div>
                {/* Floating stat card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-ft-teal/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-ft-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-ft-navy">SNAP/EBT Accepted</div>
                      <div className="text-xs text-ft-gray">All major assistance programs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-ft-red/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-ft-cream to-white rounded-3xl" />
              <div className="relative grid grid-cols-2 gap-4">
                <Image
                  src="/images/family.png"
                  alt="Family shopping at mobile market"
                  width={280}
                  height={280}
                  className="rounded-2xl shadow-lg col-span-2 w-full h-auto"
                />
                <Image
                  src="/images/elderly.png"
                  alt="Elderly community member"
                  width={136}
                  height={136}
                  className="rounded-xl shadow-md w-full h-auto"
                />
                <Image
                  src="/images/mother-son.png"
                  alt="Mother and son with fresh produce"
                  width={136}
                  height={136}
                  className="rounded-xl shadow-md w-full h-auto"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-ft-red/10 text-ft-red px-4 py-2 rounded-full text-sm font-medium mb-6">
                The Challenge
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-ft-navy mb-6 leading-tight">
                23 Million Americans Live in <span className="italic">Food Deserts</span>
              </h2>
              <p className="text-ft-gray text-lg mb-8 leading-relaxed">
                Healthy food access remains a critical challenge across North America. Traditional grocery stores are too far, too expensive, or simply don't exist in many communities.
              </p>
              <ul className="space-y-4">
                {[
                  'Underserved neighborhoods lack affordable fresh food options',
                  'Fixed locations can\'t reach everyone who needs help',
                  'Traditional food banks often lack dignity and choice',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-ft-red/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-ft-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </span>
                    <span className="text-ft-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-b from-ft-cream to-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-ft-teal/10 text-ft-teal px-4 py-2 rounded-full text-sm font-medium mb-6">
                Our Solution
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-ft-navy mb-6 leading-tight">
                We Bring the <span className="italic">Grocery Store</span> to the Community
              </h2>
              <p className="text-ft-gray text-lg mb-8 leading-relaxed">
                Our purpose-built mobile market trucks create a dignified, festive shopping experience. Each truck can serve up to 150 families weekly, accepting SNAP/EBT and offering affordable prices.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Turn-key, refrigerated mobile market vehicles',
                  'Full training and ongoing program support',
                  'Technology platform for route optimization',
                  'Customizable to your community\'s needs',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-ft-teal rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-ft-gray">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-ft-red font-medium hover:gap-3 transition-all"
              >
                Learn more about our approach
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 relative z-10">
                <Image
                  src="/images/truck.png"
                  alt="Farmers' Truck in action"
                  width={500}
                  height={350}
                  className="rounded-xl w-full h-auto"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-4 -right-4 w-full h-full bg-ft-gold/20 rounded-2xl" />
              <div className="absolute -z-20 top-8 -right-8 w-full h-full bg-ft-teal/10 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-ft-navy relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-white rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Purpose-Built Solutions
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              A Truck for Every <span className="italic text-ft-gold">Mission</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Three specialized mobile market solutions designed to meet the unique needs of your community program.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "The Farmers' Truck",
                description: "Full-size mobile market for high-volume community programs serving 100-150 families per stop.",
                features: ["26ft refrigerated", "Full POS system", "150+ families/stop"],
                color: "ft-red",
                href: "/solutions#farmers-truck"
              },
              {
                name: "The Pantry Truck",
                description: "Compact solution perfect for food pantry and emergency distribution programs.",
                features: ["Flexible layout", "Distribution ready", "Easy to operate"],
                color: "ft-gold",
                href: "/solutions#pantry-truck"
              },
              {
                name: "The Cherry Truck",
                description: "Entry-level mobile market ideal for pilot programs and smaller organizations.",
                features: ["Budget friendly", "Quick deployment", "Full support"],
                color: "ft-teal",
                href: "/solutions#cherry-truck"
              },
            ].map((truck, i) => (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1"
              >
                <div className={`w-14 h-14 bg-${truck.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-white mb-3">{truck.name}</h3>
                <p className="text-gray-400 mb-6">{truck.description}</p>
                <ul className="space-y-2 mb-6">
                  {truck.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-ft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={truck.href}
                  className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all"
                >
                  Learn more
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-ft-red/10 text-ft-red px-4 py-2 rounded-full text-sm font-medium mb-4">
                Insights & Resources
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-ft-navy">
                Latest from Our <span className="italic">Blog</span>
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-ft-red font-medium hover:gap-3 transition-all"
            >
              View all articles
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentPosts.map((post, i) => (
              <article
                key={post.slug}
                className="group bg-ft-cream rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="h-48 bg-gradient-to-br from-ft-navy/5 to-ft-teal/10 flex items-center justify-center">
                  <span className="text-6xl opacity-50">
                    {i === 0 ? '🥬' : i === 1 ? '🚚' : '💊'}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-sm text-ft-red font-medium">{post.category}</span>
                  <h3 className="font-serif text-xl text-ft-navy mt-2 mb-3 group-hover:text-ft-red transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-ft-gray text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-gray-400 text-xs">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-ft-red text-sm font-medium hover:underline"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-ft-red to-red-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Ready to Bring Fresh Food to <span className="italic">Your Community?</span>
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Our Program Development Team is here to help you launch or expand your mobile market program. Book a free consultation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://meetings.hubspot.com/fred9/pd-booking"
              target="_blank"
              className="inline-flex items-center gap-2 bg-white text-ft-red px-8 py-4 rounded-lg font-medium hover:bg-ft-cream transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Call
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg font-medium border-2 border-white/30 hover:bg-white/10 hover:border-white transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
