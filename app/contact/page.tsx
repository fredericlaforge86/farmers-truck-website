import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-800 to-green-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Talk</h1>
          <p className="text-xl text-green-100">
            Whether you're exploring mobile markets for the first time or expanding an existing program,
            we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Book a Call */}
            <div className="bg-amber-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Book a Discovery Call</h2>
              <p className="text-gray-600 mb-6">
                Schedule a 30-minute call to discuss your mobile market goals, challenges, and questions.
                No sales pitch—just an honest conversation about what might work for your situation.
              </p>
              <a
                href="https://meetings.hubspot.com/omar214/discovery-call-website"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Schedule a Call
              </a>
            </div>

            {/* Email */}
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">
                Have a quick question? Prefer email? Reach out and we'll get back to you within one business day.
              </p>
              <a
                href="mailto:hello@farmerstruck.com"
                className="inline-block text-green-700 font-semibold hover:underline"
              >
                hello@farmerstruck.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What to Expect on a Discovery Call
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">We Listen</h3>
              <p className="text-sm text-gray-600">
                Tell us about your organization, community, and food access goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">We Share</h3>
              <p className="text-sm text-gray-600">
                We'll share relevant examples and honest assessments of what works.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Next Steps</h3>
              <p className="text-sm text-gray-600">
                You'll leave with clear action items, whether that involves us or not.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Not Ready to Talk Yet?
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Start with our resources to learn more about mobile markets:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/blog/what-is-a-mobile-market"
              className="block p-4 border rounded-lg hover:shadow-md transition text-center"
            >
              <h3 className="font-semibold text-gray-900 mb-1">What Is a Mobile Market?</h3>
              <p className="text-sm text-gray-600">Complete guide</p>
            </Link>
            <Link
              href="/resources"
              className="block p-4 border rounded-lg hover:shadow-md transition text-center"
            >
              <h3 className="font-semibold text-gray-900 mb-1">FAQs</h3>
              <p className="text-sm text-gray-600">Common questions answered</p>
            </Link>
            <Link
              href="/blog/funding-mobile-markets"
              className="block p-4 border rounded-lg hover:shadow-md transition text-center"
            >
              <h3 className="font-semibold text-gray-900 mb-1">Funding Guide</h3>
              <p className="text-sm text-gray-600">Grants and partnerships</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
