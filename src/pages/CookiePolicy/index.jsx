import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Cookie } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const CookiePolicy = () => {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      {/* Header */}
      <section className="bg-gray-950 py-20">
        <div className="container max-w-4xl px-4">
          <motion.div {...fadeUp(0)} className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-400 text-xs font-semibold uppercase tracking-widest mb-6">
              <Cookie size={12} />
              Your Browsing Experience
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
              Cookie Policy
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
              This Cookie Policy explains how Camela Group Pte. Ltd. ("Camela", "we", "our", or "us") uses cookies and similar technologies when you visit our website.
            </p>
            <p className="leading-relaxed mb-8">
              By continuing to use our website, you consent to the use of cookies as described in this Cookie Policy, except where your browser settings or applicable law require otherwise.
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">1. What Are Cookies?</h2>
                <p className="leading-relaxed mb-4">
                  Cookies are small text files stored on your computer, tablet, or mobile device when you visit a website. Cookies help websites remember your preferences, improve functionality, enhance security, and provide a better browsing experience.
                </p>
                <p className="leading-relaxed mb-4">
                  Cookies do not typically contain information that directly identifies you. However, where cookies are linked to personal data, such information will be handled in accordance with our Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">2. How We Use Cookies</h2>
                <p className="leading-relaxed mb-4">Camela uses cookies to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ensure the website functions properly.</li>
                  <li>Remember your shopping cart and checkout session.</li>
                  <li>Save your website preferences and settings.</li>
                  <li>Keep you signed in to your account during your visit.</li>
                  <li>Improve website performance and user experience.</li>
                  <li>Analyse website traffic and visitor behaviour.</li>
                  <li>Help protect our website against fraudulent or unauthorised activity.</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  We do not use cookies to collect sensitive personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">3. Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Essential Cookies</h3>
                    <p className="leading-relaxed mb-3">
                      These cookies are necessary for the operation of our website. They enable core functions such as:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>User authentication</li>
                      <li>Shopping cart functionality</li>
                      <li>Secure checkout</li>
                      <li>Account login</li>
                      <li>Website security</li>
                    </ul>
                    <p className="leading-relaxed mt-3 text-sm">
                      Without these cookies, certain parts of our website may not function correctly.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Performance and Analytics Cookies</h3>
                    <p className="leading-relaxed mb-3">
                      These cookies help us understand how visitors use our website by collecting anonymous information, such as:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Pages visited</li>
                      <li>Time spent on the website</li>
                      <li>Navigation patterns</li>
                      <li>Website performance</li>
                    </ul>
                    <p className="leading-relaxed mt-3 text-sm">
                      This information helps us improve our website and services.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Functional Cookies</h3>
                    <p className="leading-relaxed mb-3">
                      Functional cookies remember your preferences to provide a more personalised browsing experience, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Preferred language</li>
                      <li>Region settings</li>
                      <li>Saved preferences</li>
                      <li>Returning visitor recognition</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Marketing Cookies</h3>
                    <p className="leading-relaxed mb-3">
                      Where applicable, marketing cookies may be used to deliver relevant advertisements and measure the effectiveness of marketing campaigns.
                    </p>
                    <p className="leading-relaxed mb-3">
                      These cookies may be provided by trusted third-party advertising or social media partners.
                    </p>
                    <p className="leading-relaxed text-sm">
                      Where required by applicable law, we will obtain your consent before using non-essential marketing cookies.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">4. Third-Party Cookies</h2>
                <p className="leading-relaxed mb-4">
                  Some cookies on our website may be placed by trusted third-party service providers that help us operate our business, including services for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Website analytics</li>
                  <li>Payment processing (such as HitPay, where applicable)</li>
                  <li>Website security</li>
                  <li>Website hosting</li>
                  <li>Website performance</li>
                  <li>Marketing and advertising (where applicable)</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  These third-party providers have their own privacy and cookie policies governing the use of their technologies. We encourage you to review their respective privacy and cookie policies when using their services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">5. Managing Cookies</h2>
                <p className="leading-relaxed mb-4">
                  Most web browsers allow you to control or disable cookies through your browser settings.
                </p>
                <p className="leading-relaxed mb-4">You may choose to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>View stored cookies</li>
                  <li>Delete existing cookies</li>
                  <li>Block future cookies</li>
                  <li>Receive notifications before cookies are stored</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Please note that disabling certain cookies may affect the functionality of our website. Some features, including account login, shopping cart, and checkout, may not operate as intended.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">6. Changes to This Cookie Policy</h2>
                <p className="leading-relaxed mb-4">
                  We may update this Cookie Policy from time to time to reflect changes in technology, our website, our business operations, or applicable legal requirements.
                </p>
                <p className="leading-relaxed">
                  Any updates will be published on this page together with the revised "Last Updated" date. We encourage you to review this Cookie Policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">7. Contact Us</h2>
                <p className="leading-relaxed mb-6">
                  If you have any questions regarding this Cookie Policy or how we use cookies, please contact us.
                </p>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 space-y-4">
                  <p className="font-bold text-gray-900 dark:text-white">Camela Group Pte. Ltd.</p>
                  <p className="text-gray-600 dark:text-gray-400">Attn: Data Protection Officer / Customer Support</p>
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

export default CookiePolicy
