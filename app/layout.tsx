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
      <body className="min-h-screen flex flex-col">
        <header className="bg-green-800 text-white py-4 sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold hover:text-green-200 transition">
              Farmers' Truck
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/solutions" className="hover:text-green-200 transition">Solutions</Link>
              <Link href="/resources" className="hover:text-green-200 transition">Resources</Link>
              <Link href="/blog" className="hover:text-green-200 transition">Blog</Link>
              <Link href="/about" className="hover:text-green-200 transition">About</Link>
              <Link
                href="/contact"
                className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition font-medium"
              >
                Book a Call
              </Link>
            </div>
            {/* Mobile menu button */}
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Farmers' Truck</h3>
                <p className="text-gray-400 text-sm">
                  Making fresh, accessible food a reality in every community.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Solutions</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/solutions" className="hover:text-white transition">The Farmers' Truck</Link></li>
                  <li><Link href="/solutions" className="hover:text-white transition">The Pantry Truck</Link></li>
                  <li><Link href="/solutions" className="hover:text-white transition">Cherry Truck</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/blog/what-is-a-mobile-market" className="hover:text-white transition">What Is a Mobile Market?</Link></li>
                  <li><Link href="/blog/how-to-start-a-mobile-market" className="hover:text-white transition">How to Start</Link></li>
                  <li><Link href="/blog/funding-mobile-markets" className="hover:text-white transition">Funding Guide</Link></li>
                  <li><Link href="/resources" className="hover:text-white transition">FAQs</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} Farmers' Truck. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
