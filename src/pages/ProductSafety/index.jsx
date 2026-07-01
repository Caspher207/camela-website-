import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Shield, AlertTriangle, Package, CheckCircle } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const ProductSafety = () => {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      {/* Header */}
      <section className="bg-gray-950 py-20">
        <div className="container max-w-4xl px-4">
          <motion.div {...fadeUp(0)} className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-400 text-xs font-semibold uppercase tracking-widest mb-6">
              <Shield size={12} />
              Quality & Safety
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
              Product Safety
            </h1>
            <p className="text-gray-400">Last Updated: 1 July 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container max-w-4xl px-4">
          <motion.div {...fadeUp(0)} className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400">
            <p className="text-lg leading-relaxed mb-12">
              At Camela Group Pte. Ltd., product quality and consumer safety are fundamental to everything we do. We are committed to providing high-quality nutritional products that are manufactured in accordance with recognised food safety and quality standards.
            </p>
            <p className="leading-relaxed mb-12">
              This Product Safety page provides important information about the safe use, storage, and handling of Camela products.
            </p>

            <div className="space-y-12">
              {/* Our Commitment to Quality */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">1. Our Commitment to Quality</motion.h2>
                <p className="leading-relaxed mb-4">
                  Camela works with experienced manufacturing partners that implement recognised quality management and food safety systems throughout the production process.
                </p>
                <p className="leading-relaxed mb-4">
                  Our manufacturing partner maintains internationally recognised certifications, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>ISO 22000 Food Safety Management System</li>
                  <li>HACCP (Hazard Analysis and Critical Control Points)</li>
                  <li>Halal Certification</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  These certifications support our commitment to producing products that meet established standards for quality, safety, and consistency.
                </p>
              </section>

              {/* Product Information */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">2. Product Information</motion.h2>
                <p className="leading-relaxed mb-4">
                  Before using any Camela product, please read the product label carefully, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ingredients</li>
                  <li>Directions for use</li>
                  <li>Recommended serving size</li>
                  <li>Storage instructions</li>
                  <li>Allergy information</li>
                  <li>Any applicable warnings or precautions</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Always use our products in accordance with the instructions provided.
                </p>
              </section>

              {/* Allergies and Sensitivities */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">3. Allergies and Sensitivities</motion.h2>
                <p className="leading-relaxed mb-4">
                  Individuals with known allergies or sensitivities to any ingredient contained in a Camela product should not consume that product.
                </p>
                <p className="leading-relaxed">
                  If you are unsure whether a product is suitable for you, please consult a qualified healthcare professional before use.
                </p>
              </section>

              {/* Medical Advice */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">4. Medical Advice</motion.h2>
                <p className="leading-relaxed mb-4">
                  Camela products are intended to support general nutrition and wellness.
                </p>
                <p className="leading-relaxed mb-4">
                  The information provided on our website is for general informational and educational purposes only and should not be regarded as medical advice.
                </p>
                <p className="leading-relaxed mb-4">
                  Our products are not intended to diagnose, treat, cure, or prevent any disease.
                </p>
                <p className="leading-relaxed">
                  If you are pregnant, breastfeeding, taking medication, have an existing medical condition, or are under medical supervision, please seek advice from a qualified healthcare professional before using any dietary supplement.
                </p>
              </section>

              {/* Proper Storage */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">5. Proper Storage</motion.h2>
                <p className="leading-relaxed mb-4">
                  To help maintain product quality, products should be stored according to the instructions provided on the packaging.
                </p>
                <p className="leading-relaxed mb-4">Unless otherwise stated on the product label, products should generally be stored:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>In a cool and dry place.</li>
                  <li>Away from direct sunlight.</li>
                  <li>Away from excessive heat and moisture.</li>
                  <li>Out of reach of young children.</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Do not consume products that have passed their expiry date or where the packaging has been opened, damaged, or tampered with before purchase.
                </p>
              </section>

              {/* Product Authenticity */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">6. Product Authenticity</motion.h2>
                <p className="leading-relaxed mb-4">
                  To help ensure product quality and authenticity, we recommend purchasing Camela products only through:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The official Camela website.</li>
                  <li>Authorised Distribution Partners.</li>
                  <li>Official Importers.</li>
                  <li>Other authorised sales channels approved by Camela Group.</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Products obtained from unauthorised sellers may not be covered by our customer support or product policies.
                </p>
              </section>

              {/* Reporting a Product Concern */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">7. Reporting a Product Concern</motion.h2>
                <p className="leading-relaxed mb-4">
                  If you believe a Camela product may have a quality or safety issue, please contact us as soon as reasonably practicable.
                </p>
                <p className="leading-relaxed mb-4">Where applicable, please provide:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Product name</li>
                  <li>Batch or lot number (if available)</li>
                  <li>Date of purchase</li>
                  <li>Place of purchase</li>
                  <li>Description of the concern</li>
                  <li>Photographs, where relevant</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Providing complete information will assist us in investigating your enquiry efficiently.
                </p>
              </section>

              {/* Contact Us */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">8. Contact Us</motion.h2>
                <p className="leading-relaxed mb-6">
                  If you have any questions regarding product quality or safety, please contact us.
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

export default ProductSafety
