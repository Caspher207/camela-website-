import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Shield } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const PrivacyPolicy = () => {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      {/* Header */}
      <section className="bg-gray-950 py-20">
        <div className="container max-w-4xl px-4">
          <motion.div {...fadeUp(0)} className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-400 text-xs font-semibold uppercase tracking-widest mb-6">
              <Shield size={12} />
              Your Privacy Matters
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-400">Last Updated: 1 July 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container max-w-4xl px-4">
          <motion.div {...fadeUp(0)} className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400">
            <p className="text-lg leading-relaxed mb-8">
              Camela Group Pte. Ltd. ("Camela", "we", "our", or "us") respects your privacy and is committed to protecting your personal data in accordance with the Singapore Personal Data Protection Act 2012 ("PDPA").
            </p>
            <p className="leading-relaxed mb-8">
              This Privacy Policy explains how we collect, use, disclose, store, and protect your personal data when you visit our website, purchase our products, create an account, contact us, or otherwise interact with us. By using our website, you acknowledge that you have read and understood this Privacy Policy.
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">1. About Camela Group</h2>
                <p className="leading-relaxed">
                  Camela Group Pte. Ltd. is a Singapore-based company specialising in bioactive peptides, functional nutrition, and wellness products. We are committed to delivering science-based nutritional solutions that support healthier lives across Singapore and Southeast Asia.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">2. Personal Data We Collect</h2>
                <p className="leading-relaxed mb-4">
                  Depending on your interaction with our website and services, we may collect the following personal data:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Mobile Number</li>
                  <li>Billing Address</li>
                  <li>Shipping Address</li>
                  <li>Products Purchased</li>
                  <li>Order History</li>
                  <li>Delivery Information</li>
                  <li>Transaction References</li>
                  <li>Username and encrypted login credentials (if you create an account)</li>
                  <li>Customer enquiries, feedback, and support requests</li>
                  <li>IP Address</li>
                  <li>Browser Type</li>
                  <li>Device Information</li>
                  <li>Operating System</li>
                  <li>Website Usage Data</li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">3. How We Collect Your Personal Data</h2>
                <p className="leading-relaxed">
                  We collect your personal data when you create an account, purchase products through our website, subscribe to our newsletter, contact us via our website or email, participate in promotions or surveys, or browse our website using cookies and analytics technologies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">4. How We Use Your Personal Data</h2>
                <p className="leading-relaxed mb-4">We may use your personal data to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process and fulfil your orders</li>
                  <li>Deliver purchased products</li>
                  <li>Verify transactions</li>
                  <li>Provide customer support</li>
                  <li>Respond to enquiries</li>
                  <li>Manage your account</li>
                  <li>Send order confirmations and delivery updates</li>
                  <li>Improve our products, services, and website</li>
                  <li>Detect fraudulent or unauthorised activities</li>
                  <li>Send promotional communications where you have provided your consent</li>
                  <li>Comply with legal and regulatory obligations</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  We will only collect, use, and disclose your personal data for purposes that a reasonable person would consider appropriate under the circumstances or as otherwise permitted by applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">5. Disclosure of Personal Data</h2>
                <p className="leading-relaxed mb-4">
                  Camela Group does not sell your personal data.
                </p>
                <p className="leading-relaxed mb-4">
                  We may disclose your personal data to trusted third parties where necessary for our business operations, including payment service providers, courier and logistics partners, website hosting providers, cloud service providers, IT service providers, professional advisers, and government authorities or regulatory bodies where required by law.
                </p>
                <p className="leading-relaxed">
                  These service providers are required to protect your personal data and may only use it for authorised business purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">6. Payment Security</h2>
                <p className="leading-relaxed">
                  Payments made through our website are securely processed by authorised third-party payment service providers. Camela Group does not store your complete credit card, debit card, or banking information on our servers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">7. Cookies</h2>
                <p className="leading-relaxed mb-4">
                  Our website uses cookies and similar technologies to improve your browsing experience. Cookies help us remember your shopping cart, save your preferences, improve website functionality, analyse website traffic, and enhance website performance.
                </p>
                <p className="leading-relaxed mb-4">
                  You may disable cookies through your browser settings. However, some website features may not function properly if cookies are disabled. For more information, please refer to our Cookie Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">8. Marketing Communications</h2>
                <p className="leading-relaxed mb-4">
                  With your consent, we may send you product updates, promotional offers, company news, wellness-related information, and educational content.
                </p>
                <p className="leading-relaxed">
                  You may unsubscribe from our marketing communications at any time by clicking the unsubscribe link included in our emails or by contacting us directly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">9. Protection of Personal Data</h2>
                <p className="leading-relaxed">
                  We take reasonable administrative, physical, and technical measures to protect your personal data against unauthorised access, collection, use, disclosure, modification, loss, or misuse. While we strive to protect your personal data, no method of electronic transmission or storage can be guaranteed to be completely secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">10. Retention of Personal Data</h2>
                <p className="leading-relaxed mb-4">
                  We retain personal data only for as long as it is necessary to fulfil the purposes for which it was collected, to satisfy legal or regulatory requirements, resolve disputes, enforce our agreements, or as otherwise permitted by applicable law.
                </p>
                <p className="leading-relaxed">
                  When personal data is no longer required, we will securely delete or anonymise it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">11. Overseas Transfer of Personal Data</h2>
                <p className="leading-relaxed">
                  Some of our service providers may process or store personal data outside Singapore. Where personal data is transferred outside Singapore, we take reasonable steps to ensure that it continues to receive a standard of protection comparable to that required under the Singapore Personal Data Protection Act.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">12. Access and Correction</h2>
                <p className="leading-relaxed">
                  Subject to applicable law, you may request access to the personal data we hold about you or request correction of inaccurate or incomplete personal data. We may require sufficient information to verify your identity before processing your request.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">13. Withdrawal of Consent</h2>
                <p className="leading-relaxed">
                  You may withdraw your consent for the collection, use, or disclosure of your personal data by contacting us. Please note that withdrawing consent may affect our ability to provide certain products or services to you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">14. Children's Privacy</h2>
                <p className="leading-relaxed">
                  Our website and products are intended for general consumers and are not specifically directed to children. If we become aware that personal data has been collected from a child without the appropriate consent where required by law, we will take reasonable steps to delete such information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">15. Changes to This Privacy Policy</h2>
                <p className="leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our business practices, technology, or legal obligations. Any updates will be published on this page together with the revised "Last Updated" date.
                </p>
                <p className="leading-relaxed">
                  We encourage you to review this Privacy Policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">16. Contact Us</h2>
                <p className="leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy or wish to exercise your rights under the Personal Data Protection Act, please contact our Data Protection Officer.
                </p>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 space-y-4">
                  <p className="font-bold text-gray-900 dark:text-white">Data Protection Officer</p>
                  <p className="font-bold text-gray-900 dark:text-white">Camela Group Pte. Ltd.</p>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-brand-500 flex-shrink-0" />
                    <a href="mailto:dawn@camela.com" className="text-gray-600 dark:text-gray-400 hover:text-brand-500 transition-colors">
                      dawn@camela.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-brand-500 flex-shrink-0" />
                    <a href="tel:+6580641997" className="text-gray-600 dark:text-gray-400 hover:text-brand-500 transition-colors">
                      +65 8064 1997
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-brand-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-600 dark:text-gray-400">
                      14 Arumugam Road, #06-05A LTC Building C, Singapore 409959
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
