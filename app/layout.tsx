import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: "Farmers' Truck - Mobile Market Solutions",
  description: 'Purpose-built mobile market trucks bringing fresh food to communities. Serving hospitals, cities, food banks, and grocers across North America.',
  keywords: 'mobile market, mobile grocery store, food truck, food access, food desert, SNAP EBT, produce market',
  openGraph: {
    title: "Farmers' Truck - Mobile Market Solutions",
    description: 'Purpose-built mobile market trucks bringing fresh food to communities.',
    type: 'website',
    siteName: "Farmers' Truck",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-ft-cream">
        {/* Header */}
        <header className="bg-ft-cream py-4 sticky top-0 z-50 border-b border-gray-100">
          <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-serif font-bold text-ft-red hover:opacity-80 transition">
              Farmers' Truck<sup className="text-xs">™</sup>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-ft-navy hover:text-ft-red transition font-medium">About Us</Link>
              <Link href="/solutions" className="text-ft-navy hover:text-ft-red transition font-medium">Our Solutions</Link>
              <Link href="/resources" className="text-ft-navy hover:text-ft-red transition font-medium">Resources</Link>
              <Link href="/blog" className="text-ft-navy hover:text-ft-red transition font-medium">Blog</Link>
              <Link href="/contact" className="text-ft-navy hover:text-ft-red transition font-medium">Contact</Link>
              <Link
                href="https://meetings.hubspot.com/frederic-laforge"
                target="_blank"
                className="bg-ft-red text-white px-5 py-2.5 rounded-md hover:bg-red-800 transition font-medium"
              >
                Book a Call
              </Link>
            </div>
            {/* Mobile menu button */}
            <button className="md:hidden text-ft-navy">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </header>

        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-ft-navy text-white">
          {/* Red accent bar */}
          <div className="h-1 bg-ft-red"></div>

          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Logo & Contact */}
              <div>
                <h3 className="font-serif font-bold text-2xl mb-4 text-white">Farmers' Truck<sup className="text-xs">™</sup></h3>
                <p className="text-gray-300 text-sm mb-4">Follow us</p>
                <div className="flex space-x-3 mb-6">
                  <a href="https://instagram.com/farmerstruck" target="_blank" rel="noopener" className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-ft-navy transition">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="https://facebook.com/farmerstruck" target="_blank" rel="noopener" className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-ft-navy transition">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </a>
                  <a href="https://youtube.com/farmerstruck" target="_blank" rel="noopener" className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-ft-navy transition">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                  </a>
                  <a href="https://linkedin.com/company/farmerstruck" target="_blank" rel="noopener" className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-ft-navy transition">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                  </a>
                </div>
                <p className="text-gray-300 text-sm font-semibold mb-2">Need Support?</p>
                <p className="text-gray-300 text-sm underline mb-1">
                  <a href="mailto:Support@thefarmerstruck.com">Support@thefarmerstruck.com</a>
                </p>
                <p className="text-gray-300 text-sm underline">
                  <a href="tel:1-866-990-7979">1-866-990-7979</a>
                </p>
              </div>

              {/* Explore */}
              <div>
                <h4 className="font-semibold text-lg mb-4">Explore</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li><Link href="/about" className="hover:text-white underline transition">About us</Link></li>
                  <li><Link href="/blog/funding-mobile-markets" className="hover:text-white underline transition">Funding</Link></li>
                  <li><Link href="/contact" className="hover:text-white underline transition">Contact</Link></li>
                  <li><Link href="/resources" className="hover:text-white underline transition">FAQs</Link></li>
                </ul>
              </div>

              {/* Our Models */}
              <div>
                <h4 className="font-semibold text-lg mb-4">Our Models</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li><Link href="/solutions#farmers-truck" className="hover:text-white underline transition">The Farmers' Truck</Link></li>
                  <li><Link href="/solutions#cherry-truck" className="hover:text-white underline transition">The Cherry Truck</Link></li>
                  <li><Link href="/solutions#pantry-truck" className="hover:text-white underline transition">The Pantry Truck</Link></li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="font-semibold text-lg mb-4">Join our Newsletter</h4>
                <div className="bg-white p-4 rounded-md">
                  <label className="text-ft-navy text-sm font-medium">Email<span className="text-ft-red">*</span></label>
                  <input
                    type="email"
                    placeholder="Joe@email.com"
                    className="w-full mt-2 px-3 py-2 border border-gray-300 rounded text-ft-gray text-sm"
                  />
                  <button className="w-full mt-3 bg-ft-teal text-white py-2 rounded font-medium hover:opacity-90 transition">
                    Submit
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} Farmers' Truck. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
