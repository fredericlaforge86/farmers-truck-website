import Link from 'next/link';

const solutions = [
  {
    id: 'farmers-truck',
    name: "The Farmers' Truck",
    tagline: 'Full-service mobile grocery store',
    description: 'Purpose-built refrigerated truck with full display fixtures, generator, and POS system. Ideal for food banks, nonprofits, and health systems running comprehensive mobile market programs.',
    features: ['26-foot refrigerated box truck', 'Built-in refrigeration and freezer', 'Display shelving and produce bins', 'Integrated generator', 'POS system ready', 'SNAP/EBT capable'],
    ideal: ['Food banks', 'Health systems', 'Municipal programs', 'Large nonprofits'],
    image: '/images/farmers-truck.jpg',
  },
  {
    id: 'pantry-truck',
    name: 'The Pantry Truck',
    tagline: 'Compact mobile market solution',
    description: 'Smaller footprint for programs with tighter budgets or limited parking. Perfect for senior centers, apartment complexes, and community sites with space constraints.',
    features: ['16-foot refrigerated truck', 'Side-opening service window', 'Compact refrigeration', 'Lower operating costs', 'Easier to navigate', 'Single operator friendly'],
    ideal: ['Senior housing', 'Apartment communities', 'Rural routes', 'Startup programs'],
    image: '/images/pantry-truck.jpg',
  },
  {
    id: 'cherry-truck',
    name: 'Cherry Truck',
    tagline: 'Mobile retail for grocers',
    description: 'Commercial-grade mobile store for grocers and food hubs looking to expand their reach. Designed for revenue generation, not just community service.',
    features: ['Commercial retail configuration', 'High-volume capacity', 'Branded exterior wrap', 'Full inventory management', 'Multiple payment options', 'Designed for profitability'],
    ideal: ['Independent grocers', 'Food hubs', 'Farmer cooperatives', 'Regional chains'],
    image: '/images/cherry-truck.jpg',
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-800 to-green-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Solutions</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Purpose-built mobile market vehicles designed for your specific mission.
            From community food access to commercial expansion.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className={`flex flex-col md:flex-row gap-8 py-12 ${
                index !== solutions.length - 1 ? 'border-b border-gray-200' : ''
              } ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image placeholder */}
              <div className="md:w-1/2">
                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                  <span className="text-gray-400 text-lg">{solution.name} Image</span>
                </div>
              </div>

              {/* Content */}
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{solution.name}</h2>
                <p className="text-lg text-green-700 font-medium mb-4">{solution.tagline}</p>
                <p className="text-gray-600 mb-6">{solution.description}</p>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Features</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {solution.features.map((feature) => (
                      <li key={feature} className="text-sm text-gray-600 flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Ideal For</h3>
                  <div className="flex flex-wrap gap-2">
                    {solution.ideal.map((item) => (
                      <span
                        key={item}
                        className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Not sure which solution fits?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We'll help you evaluate your needs, budget, and goals to find the right vehicle for your program.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Learn More</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/what-is-a-mobile-market" className="block p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900 mb-2">What Is a Mobile Market?</h3>
              <p className="text-sm text-gray-600">Complete guide to costs, operations, and impact.</p>
            </Link>
            <Link href="/blog/how-to-start-a-mobile-market" className="block p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900 mb-2">How to Start a Mobile Market</h3>
              <p className="text-sm text-gray-600">Step-by-step guide for launching your program.</p>
            </Link>
            <Link href="/blog/mobile-grocery-store-model" className="block p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900 mb-2">Mobile Grocery Store Model</h3>
              <p className="text-sm text-gray-600">Commercial strategies for grocers and food hubs.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
