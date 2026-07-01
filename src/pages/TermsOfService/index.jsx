import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, FileText } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const TermsOfService = () => {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      {/* Header */}
      <section className="bg-gray-950 py-20">
        <div className="container max-w-4xl px-4">
          <motion.div {...fadeUp(0)} className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-400 text-xs font-semibold uppercase tracking-widest mb-6">
              <FileText size={12} />
              Legal Agreement
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
              Terms of Service
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
              Welcome to the Camela Group website. These Terms of Service ("Terms") govern your access to and use of our website, products, and services. By accessing our website or placing an order, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our website.
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">1. About Camela Group</h2>
                <p className="leading-relaxed">
                  Camela Group Pte. Ltd. ("Camela", "we", "our", or "us") is a Singapore-based company specialising in bioactive peptides, functional nutrition, and wellness products. Our website provides information about our products and allows customers to purchase selected products online.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">2. Eligibility</h2>
                <p className="leading-relaxed">
                  By using this website, you confirm that you are at least 18 years of age or have obtained the consent of a parent or legal guardian. You agree to provide accurate, current, and complete information when creating an account or placing an order.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">3. Use of the Website</h2>
                <p className="leading-relaxed mb-4">You agree to use this website only for lawful purposes. You must not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the website in any manner that violates any applicable law or regulation.</li>
                  <li>Attempt to gain unauthorised access to our systems or networks.</li>
                  <li>Interfere with the operation or security of the website.</li>
                  <li>Upload or transmit malicious software, viruses, or harmful code.</li>
                  <li>Use the website for fraudulent or misleading purposes.</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  We reserve the right to suspend or terminate access to users who violate these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">4. Product Information</h2>
                <p className="leading-relaxed mb-4">
                  We strive to ensure that all product descriptions, images, pricing, and other information on our website are accurate. However, errors may occasionally occur.
                </p>
                <p className="leading-relaxed mb-4">We reserve the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Correct any errors or inaccuracies.</li>
                  <li>Modify product information without prior notice.</li>
                  <li>Update product availability.</li>
                  <li>Discontinue products at any time.</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Product images are for illustration purposes only. Actual packaging and appearance may vary.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">5. Health Information Disclaimer</h2>
                <p className="leading-relaxed mb-4">
                  The information provided on this website is intended for general educational and informational purposes only. It is not intended to diagnose, treat, cure, or prevent any disease and should not be considered medical advice.
                </p>
                <p className="leading-relaxed mb-4">
                  Our products are not intended to replace professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional before using any dietary supplement, particularly if you are pregnant, nursing, taking medication, or have an existing medical condition.
                </p>
                <p className="leading-relaxed">
                  Individual results may vary.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">6. Orders and Acceptance</h2>
                <p className="leading-relaxed mb-4">
                  All orders placed through our website are subject to acceptance by Camela.
                </p>
                <p className="leading-relaxed mb-4">
                  After placing an order, you will receive an order confirmation acknowledging receipt of your order. This confirmation does not constitute acceptance of your order.
                </p>
                <p className="leading-relaxed mb-4">We reserve the right to refuse or cancel any order for reasons including, but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Product unavailability</li>
                  <li>Pricing or typographical errors</li>
                  <li>Suspected fraudulent activity</li>
                  <li>Payment authorisation failure</li>
                  <li>Compliance with applicable laws</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  If payment has already been received for a cancelled order, an appropriate refund will be processed.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">7. Pricing and Payment</h2>
                <p className="leading-relaxed mb-4">
                  All prices displayed on our website are in Singapore Dollars (SGD) unless otherwise stated.
                </p>
                <p className="leading-relaxed mb-4">
                  Prices may change without prior notice.
                </p>
                <p className="leading-relaxed">
                  Payment must be completed using the payment methods made available on our website before an order is processed.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">8. Shipping and Delivery</h2>
                <p className="leading-relaxed mb-4">
                  Estimated delivery times are provided for reference only and are not guaranteed.
                </p>
                <p className="leading-relaxed mb-4">Camela is not responsible for delays caused by:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Courier services</li>
                  <li>Customs clearance</li>
                  <li>Weather conditions</li>
                  <li>Force majeure events</li>
                  <li>Incorrect delivery information provided by the customer</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Risk of loss passes to the customer upon successful delivery.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">9. Returns and Refunds</h2>
                <p className="leading-relaxed">
                  Returns, exchanges, and refunds are subject to our Returns Policy. Please refer to our Returns Policy for detailed information regarding eligibility, procedures, and applicable conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">10. Intellectual Property</h2>
                <p className="leading-relaxed mb-4">
                  All content available on this website, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Logos</li>
                  <li>Product names</li>
                  <li>Product images</li>
                  <li>Photographs</li>
                  <li>Videos</li>
                  <li>Graphics</li>
                  <li>Text</li>
                  <li>Website design</li>
                  <li>Software</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  is the property of Camela Group Pte. Ltd. or its licensors and is protected under applicable intellectual property laws.
                </p>
                <p className="leading-relaxed mt-4">
                  You may not reproduce, distribute, modify, publish, or commercially exploit any content without our prior written consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">11. User Accounts</h2>
                <p className="leading-relaxed mb-4">
                  If you create an account, you are responsible for maintaining the confidentiality of your login credentials.
                </p>
                <p className="leading-relaxed mb-4">
                  You are responsible for all activities conducted under your account.
                </p>
                <p className="leading-relaxed">
                  Please notify us immediately if you suspect any unauthorised use of your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">12. Limitation of Liability</h2>
                <p className="leading-relaxed mb-4">
                  To the fullest extent permitted by applicable law, Camela Group shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising out of or relating to your use of this website or our products.
                </p>
                <p className="leading-relaxed mb-4">
                  Our total liability for any claim shall not exceed the amount paid by you for the relevant product giving rise to the claim, except where liability cannot be excluded under applicable law.
                </p>
                <p className="leading-relaxed">
                  Nothing in these Terms excludes or limits any rights that cannot lawfully be excluded under Singapore law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">13. Indemnity</h2>
                <p className="leading-relaxed">
                  You agree to indemnify and hold harmless Camela Group, its directors, employees, agents, and affiliates from any claims, liabilities, damages, costs, or expenses arising from your breach of these Terms or misuse of the website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">14. Third-Party Links</h2>
                <p className="leading-relaxed mb-4">
                  Our website may contain links to third-party websites for your convenience.
                </p>
                <p className="leading-relaxed mb-4">
                  Camela does not control or endorse these websites and is not responsible for their content, privacy practices, or services.
                </p>
                <p className="leading-relaxed">
                  Your use of third-party websites is at your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">15. Privacy</h2>
                <p className="leading-relaxed">
                  Your use of our website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">16. Changes to These Terms</h2>
                <p className="leading-relaxed mb-4">
                  We may revise these Terms from time to time.
                </p>
                <p className="leading-relaxed mb-4">
                  Any changes will take effect immediately upon publication on this website.
                </p>
                <p className="leading-relaxed">
                  Your continued use of the website after changes have been published constitutes your acceptance of the revised Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">17. Governing Law</h2>
                <p className="leading-relaxed mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the Republic of Singapore.
                </p>
                <p className="leading-relaxed">
                  Any dispute arising out of or relating to these Terms or your use of this website shall be subject to the exclusive jurisdiction of the courts of Singapore.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">18. Contact Us</h2>
                <p className="leading-relaxed mb-6">
                  If you have any questions regarding these Terms of Service, please contact us.
                </p>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 space-y-4">
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

export default TermsOfService
