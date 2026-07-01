import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Accessibility } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const AccessibilityStatement = () => {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      {/* Header */}
      <section className="bg-gray-950 py-20">
        <div className="container max-w-4xl px-4">
          <motion.div {...fadeUp(0)} className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-400 text-xs font-semibold uppercase tracking-widest mb-6">
              <Accessibility size={12} />
              Inclusive for Everyone
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
              Accessibility Statement
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
              At Camela Group Pte. Ltd. ("Camela", "we", "our", or "us"), we believe everyone should be able to access and enjoy our website, regardless of ability or the technology they use.
            </p>
            <p className="leading-relaxed mb-8">
              We are committed to providing a website that is accessible, inclusive, and easy to use for all visitors.
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">Our Commitment</h2>
                <p className="leading-relaxed mb-4">
                  We continuously work to improve the accessibility and usability of our website by following recognised web accessibility best practices wherever reasonably possible.
                </p>
                <p className="leading-relaxed">
                  Our goal is to provide an online experience that allows all users to browse our products, access information, and complete purchases with confidence.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">Accessibility Features</h2>
                <p className="leading-relaxed mb-4">
                  Where reasonably practicable, our website aims to support:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Clear and consistent navigation.</li>
                  <li>Responsive layouts for desktop, tablet, and mobile devices.</li>
                  <li>Readable fonts and sufficient colour contrast.</li>
                  <li>Meaningful headings and page structure.</li>
                  <li>Alternative text for informative images where appropriate.</li>
                  <li>Keyboard-accessible navigation for essential website functions.</li>
                  <li>Forms designed with clear labels and instructions.</li>
                  <li>Compatibility with commonly used modern web browsers.</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  As our website continues to evolve, we will make ongoing improvements to enhance accessibility and user experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">Third-Party Content</h2>
                <p className="leading-relaxed mb-4">
                  Certain services or features on our website may be provided by third-party providers, including payment gateways, embedded content, or external applications.
                </p>
                <p className="leading-relaxed">
                  While we strive to work with reputable providers, we cannot guarantee the accessibility of third-party content that is not under our direct control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">Feedback</h2>
                <p className="leading-relaxed mb-4">
                  If you experience difficulty accessing any part of our website, encounter an accessibility barrier, or have suggestions on how we can improve, we welcome your feedback.
                </p>
                <p className="leading-relaxed">
                  Please contact us and include as much detail as possible about the issue you encountered, including the page you were visiting and the device or browser you were using. This information helps us investigate and improve the accessibility of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
                <p className="leading-relaxed mb-6">
                  If you require assistance or wish to report an accessibility issue, please contact us.
                </p>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 space-y-4">
                  <p className="font-bold text-gray-900 dark:text-white">Camela Group Pte. Ltd.</p>
                  <p className="text-gray-600 dark:text-gray-400">Customer Support</p>
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
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AccessibilityStatement
