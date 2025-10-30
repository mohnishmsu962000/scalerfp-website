import Header from '@/components/ui/Header';
import Footer from '@/components/sections/Footer';

export default function RefundPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-medium mb-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Cancellation and Refund Policy
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-medium mt-8 mb-4">1. Subscription Cancellation</h2>
            <p className="text-gray-700 mb-4">
              You can cancel your ScaleRFP subscription at any time from your account settings or by contacting our support team at <a href="mailto:support@scalerfp.com" className="text-brand-primary underline">support@scalerfp.com</a>.
              Once cancelled, your subscription will remain active until the end of the current billing cycle, after which it will not renew.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">2. Refunds</h2>
            <p className="text-gray-700 mb-4">
              Because ScaleRFP provides digital, subscription-based services with immediate access to features and resources, we do not offer refunds for partially used billing periods or accidental renewals.
              Refunds may be considered only in exceptional cases such as duplicate payments or billing errors, at our sole discretion.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">3. Trial and Promotional Plans</h2>
            <p className="text-gray-700 mb-4">
              Free and trial plans automatically expire at the end of their period unless upgraded. No charges are applied during the trial, and refunds are not applicable for promotional or complimentary plans.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">4. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you experience an issue with your subscription or billing, please contact us at <a href="mailto:billing@scalerfp.com" className="text-brand-primary underline">billing@scalerfp.com</a> within 7 days of the transaction.
              We’ll review your request promptly and get back to you.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}