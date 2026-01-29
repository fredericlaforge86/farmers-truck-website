import Link from 'next/link';

const faqs = [
  {
    question: 'How much does a mobile market cost to start?',
    answer: 'A purpose-built mobile market truck typically costs $100,000 to $180,000. Annual operating costs run $80,000 to $150,000 depending on staffing and route frequency. Trailers cost less upfront but require a tow vehicle.',
  },
  {
    question: 'Can mobile markets accept SNAP/EBT?',
    answer: 'Yes. Most mobile markets can be set up to accept SNAP/EBT benefits, WIC vouchers, and produce prescriptions. This requires wireless payment equipment and appropriate licensing.',
  },
  {
    question: 'How long does it take to launch a mobile market?',
    answer: 'From initial planning to first route, most programs take 6-12 months. Vehicle procurement is often the longest lead time. Community partnerships and route planning can happen in parallel.',
  },
  {
    question: 'Do mobile markets make money?',
    answer: 'Most mission-driven mobile markets don\'t sustain themselves on sales alone. They require ongoing support from grants, health system partnerships, or municipal funding. Commercial programs serving grocers can be profitable.',
  },
  {
    question: 'What permits do I need?',
    answer: 'Requirements vary by location. Most programs need a mobile food vendor license, food handler permits, vehicle registration, and business licenses. Some states require additional certifications.',
  },
  {
    question: 'How many stops can one truck make per week?',
    answer: 'A single vehicle typically serves 15-20 stops per week, with 1-3 hours per stop. More stops are possible with shorter service times, but community relationships often benefit from longer, consistent visits.',
  },
];

const fundingResources = [
  {
    title: 'USDA Community Facilities Grants',
    description: 'Federal funding for equipment and vehicles serving rural communities.',
    link: '/blog/mobile-market-usda-grants',
  },
  {
    title: 'Health System Partnerships',
    description: 'How hospitals fund mobile markets through community benefit programs.',
    link: '/blog/mobile-market-health-system-funding',
  },
  {
    title: 'Corporate Sponsorship',
    description: 'Building partnerships with corporate funders and sponsors.',
    link: '/blog/mobile-market-corporate-sponsorship',
  },
  {
    title: 'State Policy & Incentives',
    description: 'State-level programs supporting mobile food access.',
    link: '/blog/mobile-market-state-policy',
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-800 to-green-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
          <p className="text-xl text-green-100">
            Guides, FAQs, and funding information for mobile market programs.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-gray-600">
              Have more questions?{' '}
              <Link href="/contact" className="text-green-700 font-medium hover:underline">
                Book a discovery call
              </Link>{' '}
              and we'll walk through your specific situation.
            </p>
          </div>
        </div>
      </section>

      {/* Funding Resources */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Funding & Grants</h2>
          <p className="text-lg text-gray-600 mb-8">
            Mobile markets typically require funding from multiple sources. Here's where to start.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {fundingResources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.link}
                className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-600">{resource.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/blog/funding-mobile-markets"
              className="text-green-700 font-medium hover:underline"
            >
              Read our complete funding guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">In-Depth Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/blog/what-is-a-mobile-market"
              className="block p-6 border-2 border-green-200 rounded-lg hover:border-green-400 transition"
            >
              <span className="text-sm text-green-700 font-medium">Pillar Guide</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-1 mb-2">
                What Is a Mobile Market?
              </h3>
              <p className="text-gray-600">
                Complete guide to mobile market costs, operations, and impact measurement.
              </p>
            </Link>
            <Link
              href="/blog/mobile-markets-for-hospitals"
              className="block p-6 border-2 border-green-200 rounded-lg hover:border-green-400 transition"
            >
              <span className="text-sm text-green-700 font-medium">Pillar Guide</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-1 mb-2">
                Mobile Markets for Hospitals
              </h3>
              <p className="text-gray-600">
                Healthcare partnerships, community benefit, and clinical integration.
              </p>
            </Link>
            <Link
              href="/blog/how-to-start-a-mobile-market"
              className="block p-6 border-2 border-green-200 rounded-lg hover:border-green-400 transition"
            >
              <span className="text-sm text-green-700 font-medium">Pillar Guide</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-1 mb-2">
                How to Start a Mobile Market
              </h3>
              <p className="text-gray-600">
                Step-by-step guide from planning through launch and beyond.
              </p>
            </Link>
            <Link
              href="/blog/mobile-grocery-store-model"
              className="block p-6 border-2 border-green-200 rounded-lg hover:border-green-400 transition"
            >
              <span className="text-sm text-green-700 font-medium">Pillar Guide</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-1 mb-2">
                Mobile Grocery Store Model
              </h3>
              <p className="text-gray-600">
                Commercial strategies for grocers, food hubs, and farmer cooperatives.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We're happy to discuss your specific situation and help you figure out next steps.
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
