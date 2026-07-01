import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, RotateCcw } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const ReturnsPolicy = () => {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      {/* Header */}
      <section className="bg-gray-950 py-20">
        <div className="container max-w-4xl px-4">
          <motion.div {...fadeUp(0)} className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-400 text-xs font-semibold uppercase tracking-widest mb-6">
              <RotateCcw size={12} />
              Easy Returns
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
              Returns Policy
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
              Camela Group Pte. Ltd. is committed to providing quality products and excellent customer service. If you experience an issue with your purchase, we encourage you to contact us as soon as possible so that we can assist you.
            </p>
            <p className="leading-relaxed mb-8">
              This Returns Policy applies to retail purchases made through the Camela website. Distribution Partners, Official Importers, and other business customers may be subject to separate contractual terms and conditions.
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">1. Eligibility for Returns</h2>
                <p className="leading-relaxed mb-4">To be eligible for a return, the product must:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Have been purchased directly from the official Camela website.</li>
                  <li>Be accompanied by proof of purchase or order confirmation.</li>
                  <li>Meet the return conditions outlined in this policy.</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Returns are reviewed on a case-by-case basis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">2. Non-Returnable Products</h2>
                <p className="leading-relaxed mb-4">
                  For hygiene, food safety, and quality assurance reasons, we generally do not accept returns for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Opened or used products.</li>
                  <li>Products with broken or tampered seals.</li>
                  <li>Products that have been improperly stored or handled after delivery.</li>
                  <li>Products purchased through authorised distributors, retailers, or third-party marketplaces. These purchases should be addressed directly with the original seller.</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Nothing in this policy limits any rights you may have under applicable Singapore law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">3. Damaged, Defective, or Incorrect Products</h2>
                <p className="leading-relaxed mb-4">
                  If you receive a product that is damaged during delivery, defective, or different from what you ordered, please contact us as soon as reasonably practicable after receiving your order.
                </p>
                <p className="leading-relaxed mb-4">To assist us in reviewing your request, please provide:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your order number.</li>
                  <li>A description of the issue.</li>
                  <li>Clear photographs of the product and its packaging, where applicable.</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  We may request additional information before determining the appropriate resolution.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">4. Return Review</h2>
                <p className="leading-relaxed mb-4">
                  Once we receive your request, we will review the information provided and determine whether your return qualifies under this policy.
                </p>
                <p className="leading-relaxed mb-4">Where a return is approved, Camela may, at its discretion and where appropriate:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Replace the product.</li>
                  <li>Provide a refund.</li>
                  <li>Offer another suitable resolution.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">5. Refunds</h2>
                <p className="leading-relaxed mb-4">
                  Approved refunds will be processed using the original payment method whenever reasonably practicable.
                </p>
                <p className="leading-relaxed mb-4">
                  The time required for the refunded amount to appear in your account may vary depending on your payment provider or financial institution.
                </p>
                <p className="leading-relaxed">
                  Shipping fees and other service charges may not be refundable unless required by applicable law or where the return is due to our error.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">6. Return Shipping</h2>
                <p className="leading-relaxed mb-4">
                  Where a return has been approved, we will provide instructions on how to return the product.
                </p>
                <p className="leading-relaxed mb-4">
                  Customers should not return products without first contacting us and receiving return instructions.
                </p>
                <p className="leading-relaxed">
                  Responsibility for return shipping costs will depend on the circumstances of the return and applicable law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">7. Products Purchased Through Business Partners</h2>
                <p className="leading-relaxed mb-4">
                  Products purchased through authorised Distribution Partners, Official Importers, retailers, or other authorised resellers are subject to the return policies of the respective seller.
                </p>
                <p className="leading-relaxed">
                  Please contact the original point of purchase for assistance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">8. Contact Us</h2>
                <p className="leading-relaxed mb-6">
                  If you have any questions regarding this Returns Policy or wish to request a return, please contact us.
                </p>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 space-y-4">
                  <p className="font-bold text-gray-900 dark:text-white">Camela Group Pte. Ltd.</p>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-brand-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-600 dark:text-gray-400">
                      14 Arumugam Road<br />
                      #06-05A LTC Building C<br />
                      Singapore 409959
                    </p>
                  </div>
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
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                    <div className="flex items-center gap-3">
                      <Clock size={18} className="text-brand-500 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Business Hours</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Monday to Friday: 9:00 AM – 6:00 PM (Singapore Time)<br />
                          Closed on Saturdays, Sundays, and Singapore Public Holidays.
                        </p>
                      </div>
                    </div>
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

export default ReturnsPolicy
