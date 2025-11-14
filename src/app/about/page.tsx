import Header from '@/components/ui/Header';
import Footer from '@/components/sections/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-medium mb-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Us
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              ScalerFP is built with a single mission: to help teams respond to RFPs faster,
              smarter, and more accurately using advanced AI automation.
              We believe that RFP responses shouldn’t require endless hours of manual rewriting,
              document searching, and coordination across teams — and we’re here to change that.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">Our Vision</h2>
            <p className="mb-4">
              To make the RFP process effortless for every company by combining the power of
              AI, intelligent knowledge management, and intuitive workflows. We aim to
              become the most reliable and efficient RFP automation platform globally.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">Why We Built ScalerFP</h2>
            <p className="mb-4">
              Traditional RFP workflows are slow, repetitive, and dependent on tribal knowledge.
              Teams often spend days searching through old responses, rewriting similar answers,
              and coordinating across departments.
            </p>
            <p className="mb-4">
              ScalerFP was designed to fix this. We help teams:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Automate RFP responses with AI</li>
              <li>Centralize all knowledge in a secure, searchable library</li>
              <li>Collaborate seamlessly across departments</li>
              <li>Respond to more RFPs in less time</li>
              <li>Win more deals with better, consistent responses</li>
            </ul>

            <h2 className="text-2xl font-medium mt-8 mb-4">How ScalerFP Works</h2>
            <p className="mb-4">
              ScalerFP connects your knowledge base, past responses, technical documents,
              and product material into one intelligent system. Using industry-leading
              AI models from OpenAI and Anthropic, we generate high-quality, context-aware
              responses for every RFP you upload.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Upload your RFP document</li>
              <li>Let our AI analyze each question</li>
              <li>Review, edit, and export your complete response</li>
              <li>Continuously improve responses with your knowledge library</li>
            </ul>

            <h2 className="text-2xl font-medium mt-8 mb-4">Our Commitment to Security</h2>
            <p className="mb-4">
              Security is at the heart of ScalerFP. All data is encrypted in transit and at rest,
              processed securely through trusted AI providers, and never used to train external
              models. Your knowledge remains yours — always.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">The Team Behind ScalerFP</h2>
            <p className="mb-4">
              We are a passionate team of product builders, engineers, and AI practitioners
              focused on solving real business problems with cutting-edge technology.
              Our experience spans SaaS, enterprise software, B2B sales enablement,
              and workflow automation.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">Our Promise</h2>
            <p className="mb-4">
              We’re committed to helping teams save time, reduce effort, and improve the
              quality of their RFP responses. As we continue to evolve, we will always
              prioritize clarity, security, and user-focused design.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">Get in Touch</h2>
            <p className="mb-4">
              Have questions or want to collaborate?  
              Reach us anytime at <span className="font-medium">team@scalerfp.com</span>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}