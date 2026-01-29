import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-800 to-green-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Farmers' Truck</h1>
          <p className="text-xl text-green-100">
            Making fresh, accessible food a reality in every community.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-6">
            The Farmers' Truck is a social enterprise on a mission to empower food security champions.
            Our goal is fresh, accessible food in every community across North America.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            We are proud to have partnered with many mobile produce market programs through our proven
            mobile market vehicle solution. We don't just build trucks—we help organizations design,
            launch, and sustain programs that make a real difference.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              Farmers' Truck started from a simple observation: too many communities lack access to
              fresh, healthy food, and the traditional solutions weren't working fast enough.
            </p>
            <p className="mb-4">
              Brick-and-mortar grocery stores require massive capital investment and take years to develop.
              Food delivery apps exclude people without smartphones or credit cards. Food pantries serve
              a critical need but often can't provide the fresh produce that prevents diet-related disease.
            </p>
            <p className="mb-4">
              Mobile markets fill this gap. They meet people where they are. They bring the grocery store
              to the neighborhood instead of asking the neighborhood to find transportation to the grocery store.
            </p>
            <p>
              We've made it our mission to help food banks, hospitals, cities, and grocers build mobile
              market programs that actually work—vehicles that last, operations that sustain, and communities
              that benefit.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-700 mb-2">50+</div>
              <div className="text-gray-600">Mobile markets deployed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-700 mb-2">1M+</div>
              <div className="text-gray-600">Pounds of produce distributed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-700 mb-2">100+</div>
              <div className="text-gray-600">Communities served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Believe</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Access is a starting point</h3>
              <p className="text-gray-600">
                Food access alone doesn't solve food insecurity. But without access, nothing else works.
                We focus on the practical first step.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dignity matters</h3>
              <p className="text-gray-600">
                Mobile markets let people choose their own food, pay for it, and shop like anyone else.
                That matters more than efficiency metrics.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability requires honesty</h3>
              <p className="text-gray-600">
                We're honest about what mobile markets can and can't do. Programs that last are built on
                realistic expectations, not wishful thinking.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Partnerships amplify impact</h3>
              <p className="text-gray-600">
                The best mobile markets connect health systems, food banks, cities, and communities.
                We help build those relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Talk</h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you're exploring mobile markets for the first time or looking to expand an existing program,
            we're happy to share what we've learned.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
