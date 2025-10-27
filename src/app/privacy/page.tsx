import Header from '@/components/ui/Header';
import Footer from '@/components/sections/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-medium mb-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-medium mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Account information (name, email, company)</li>
              <li>RFP documents and responses</li>
              <li>Knowledge base documents</li>
              <li>Usage data and analytics</li>
            </ul>

            <h2 className="text-2xl font-medium mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Provide and improve our services</li>
              <li>Generate AI-powered RFP responses</li>
              <li>Send you updates and notifications</li>
              <li>Analyze usage patterns and optimize performance</li>
            </ul>

            <h2 className="text-2xl font-medium mt-8 mb-4">3. Data Processing with AI</h2>
            <p className="text-gray-700 mb-4">
              We use OpenAI and Anthropic Claude APIs to process your documents and generate responses. Your data is:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Encrypted in transit and at rest</li>
              <li>Never used to train AI models</li>
              <li>Never shared with third parties except our AI providers</li>
              <li>Processed only for generating your RFP responses</li>
            </ul>

            <h2 className="text-2xl font-medium mt-8 mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement industry-standard security measures including encryption, secure data centers, and regular security audits to protect your information.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">5. Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your data for as long as your account is active or as needed to provide services. You can request deletion of your data at any time.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">6. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2 className="text-2xl font-medium mt-8 mb-4">7. Cookies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar technologies to improve your experience, analyze usage, and deliver personalized content.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">8. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              We use the following third-party services:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Clerk for authentication</li>
              <li>OpenAI and Anthropic for AI processing</li>
              <li>Stripe for payment processing</li>
            </ul>

            <h2 className="text-2xl font-medium mt-8 mb-4">9. Changes to Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this policy from time to time. We will notify you of any material changes via email or through the service.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              For privacy-related questions, contact us at privacy@scalerfp.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}