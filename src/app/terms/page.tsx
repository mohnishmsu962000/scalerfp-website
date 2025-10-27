import Header from '@/components/ui/Header';
import Footer from '@/components/sections/Footer';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-medium mb-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-medium mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using ScaleRFP, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">2. Use License</h2>
            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily use ScaleRFP for personal or commercial use. This is the grant of a license, not a transfer of title.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">3. User Accounts</h2>
            <p className="text-gray-700 mb-4">
              You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">4. Acceptable Use</h2>
            <p className="text-gray-700 mb-4">
              You agree not to use ScaleRFP to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit malicious code or viruses</li>
              <li>Interfere with the service or servers</li>
            </ul>

            <h2 className="text-2xl font-medium mt-8 mb-4">5. Payment Terms</h2>
            <p className="text-gray-700 mb-4">
              Paid plans are billed monthly in advance. You may cancel your subscription at any time. Refunds are provided within 14 days of initial purchase.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              The service and its original content remain the property of ScaleRFP. You retain all rights to your uploaded content and generated RFP responses.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">7. Termination</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              ScaleRFP shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of the service.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the service.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms, please contact us at legal@scalerfp.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}