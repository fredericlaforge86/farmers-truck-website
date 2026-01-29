import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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
      <body className="min-h-screen flex flex-col bg-white">
        {/* Header */}
        <header className="bg-white/95 backdrop-blur-md py-4 sticky top-0 z-50 border-b border-gray-100 shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            <Link href="/" className="group">
              <Image
                src="/images/logo-red.png"
                alt="Farmers' Truck"
                width={220}
                height={44}
                className="group-hover:opacity-80 transition-opacity"
              />
            </Link>
            <div className="hidden lg:flex items-center space-x-1">
              <Link href="/about" className="text-ft-gray hover:text-ft-red hover:bg-ft-red/5 px-4 py-2 rounded-lg transition-all font-medium text-sm">About Us</Link>
              <Link href="/solutions" className="text-ft-gray hover:text-ft-red hover:bg-ft-red/5 px-4 py-2 rounded-lg transition-all font-medium text-sm">Solutions</Link>
              <Link href="/resources" className="text-ft-gray hover:text-ft-red hover:bg-ft-red/5 px-4 py-2 rounded-lg transition-all font-medium text-sm">Resources</Link>
              <Link href="/blog" className="text-ft-gray hover:text-ft-red hover:bg-ft-red/5 px-4 py-2 rounded-lg transition-all font-medium text-sm">Blog</Link>
              <Link href="/contact" className="text-ft-gray hover:text-ft-red hover:bg-ft-red/5 px-4 py-2 rounded-lg transition-all font-medium text-sm">Contact</Link>
              <div className="w-px h-6 bg-gray-200 mx-2" />
              <Link
                href="https://meetings.hubspot.com/fred9/pd-booking"
                target="_blank"
                className="bg-ft-red text-white px-5 py-2.5 rounded-lg hover:bg-red-800 transition-all font-medium text-sm hover:shadow-lg hover:shadow-ft-red/25 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a Call
              </Link>
            </div>
            {/* Mobile menu button */}
            <button className="lg:hidden text-ft-navy p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </header>

        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-ft-navy text-white relative overflow-hidden">
          {/* Red accent bar */}
          <div className="h-1.5 bg-gradient-to-r from-ft-red via-ft-gold to-ft-teal"></div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-ft-teal/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              {/* Logo & Contact */}
              <div className="lg:col-span-1">
                <div className="mb-6">
                  <Image
                    src="/images/logo-badge.png"
                    alt="Farmers' Truck"
                    width={200}
                    height={50}
                    className="mb-2"
                  />
                </div>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Making fresh, accessible food a reality in every community across North America.
                </p>
                <div className="flex space-x-3 mb-6">
                  <a href="https://instagram.com/farmerstruck" target="_blank" rel="noopener" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-ft-red transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="https://facebook.com/farmerstruck" target="_blank" rel="noopener" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-ft-red transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </a>
                  <a href="https://youtube.com/farmerstruck" target="_blank" rel="noopener" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-ft-red transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                  </a>
                  <a href="https://linkedin.com/company/farmerstruck" target="_blank" rel="noopener" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-ft-red transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                  </a>
                </div>
              </div>

              {/* Explore */}
              <div>
                <h4 className="font-semibold text-lg mb-6 text-white">Explore</h4>
                <ul className="space-y-4 text-sm">
                  <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ft-red rounded-full"></span>About us</Link></li>
                  <li><Link href="/blog/funding-mobile-markets" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ft-red rounded-full"></span>Funding Guide</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ft-red rounded-full"></span>Contact</Link></li>
                  <li><Link href="/resources" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ft-red rounded-full"></span>FAQs</Link></li>
                </ul>
              </div>

              {/* Our Models */}
              <div>
                <h4 className="font-semibold text-lg mb-6 text-white">Our Trucks</h4>
                <ul className="space-y-4 text-sm">
                  <li><Link href="/solutions#farmers-truck" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ft-gold rounded-full"></span>The Farmers' Truck</Link></li>
                  <li><Link href="/solutions#pantry-truck" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ft-gold rounded-full"></span>The Pantry Truck</Link></li>
                  <li><Link href="/solutions#cherry-truck" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ft-gold rounded-full"></span>The Cherry Truck</Link></li>
                </ul>
              </div>

              {/* Contact & Newsletter */}
              <div>
                <h4 className="font-semibold text-lg mb-6 text-white">Get in Touch</h4>
                <div className="space-y-4 text-sm mb-6">
                  <p className="text-gray-400 flex items-center gap-3">
                    <svg className="w-5 h-5 text-ft-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:Support@thefarmerstruck.com" className="hover:text-white transition-colors">Support@thefarmerstruck.com</a>
                  </p>
                  <p className="text-gray-400 flex items-center gap-3">
                    <svg className="w-5 h-5 text-ft-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:1-866-990-7979" className="hover:text-white transition-colors">1-866-990-7979</a>
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-sm font-medium text-white mb-3">Join our Newsletter</p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-ft-teal transition-colors"
                    />
                    <button className="px-4 py-2 bg-ft-teal text-white rounded-lg font-medium hover:bg-ft-teal/80 transition-colors text-sm">
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Farmers' Truck. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
