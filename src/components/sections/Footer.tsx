import Link from 'next/link';
import { FiZap, FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-200 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <FiZap className="text-white h-5 w-5" />
              </div>
              <span className="text-xl font-medium">ScaleRFP</span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              AI-powered RFP automation that helps you win more deals in less time.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link href="#features" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Pricing</Link></li>
              <li><Link href="#faq" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Terms</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Connect</h4>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                <FiTwitter className="h-5 w-5 text-gray-600" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                <FiLinkedin className="h-5 w-5 text-gray-600" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                <FiGithub className="h-5 w-5 text-gray-600" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} ScaleRFP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}