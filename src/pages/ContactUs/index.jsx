import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, MessageCircle, Users, Briefcase, Globe, Star } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const ContactUs = () => {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      {/* Header */}
      <section className="bg-gray-950 py-20">
        <div className="container max-w-4xl px-4">
          <motion.div {...fadeUp(0)} className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-400 text-xs font-semibold uppercase tracking-widest mb-6">
              <MessageCircle size={12} />
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
              Contact Us
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
              Thank you for your interest in Camela Group. Whether you are a customer, a prospective member, a business partner, or an organisation interested in representing our products internationally, we welcome the opportunity to hear from you.
            </p>
            <p className="leading-relaxed mb-12">
              Our team is committed to responding to enquiries as promptly as possible during our business hours.
            </p>

            <div className="space-y-16">
              {/* General Enquiries */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">General Enquiries</motion.h2>
                <p className="leading-relaxed mb-6">
                  For general questions about Camela Group, our products, or our services, please contact us using the details below.
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
                </div>
              </section>

              {/* Customer Support */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">Customer Support</motion.h2>
                <p className="leading-relaxed mb-4">
                  Our Customer Support team can assist you with:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Product enquiries</li>
                  <li>Order enquiries</li>
                  <li>Delivery enquiries</li>
                  <li>Returns and refunds</li>
                  <li>Website assistance</li>
                  <li>General customer support</li>
                </ul>
                <p className="leading-relaxed">
                  Please include your order number where applicable to help us assist you more efficiently.
                </p>
              </section>

              {/* Membership Enquiries */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">Membership Enquiries</motion.h2>
                <p className="leading-relaxed">
                  If you are interested in becoming a Camela Member or have questions regarding membership, wellness programmes, or member-related enquiries, please contact us using the details above.
                </p>
              </section>

              {/* Distribution Partner Enquiries */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">Distribution Partner Enquiries</motion.h2>
                <p className="leading-relaxed mb-4">
                  Camela welcomes enquiries from businesses interested in becoming authorised Distribution Partners.
                </p>
                <p className="leading-relaxed mb-4">
                  If you would like to explore distribution opportunities, please contact us with information about your company, business experience, and target market. Our Business Development team will review your enquiry and respond if additional information is required.
                </p>
                <p className="leading-relaxed">
                  Submission of an enquiry does not constitute acceptance into the Distribution Partner programme.
                </p>
              </section>

              {/* Official Importer Enquiries */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">Official Importer Enquiries</motion.h2>
                <p className="leading-relaxed mb-4">
                  We welcome enquiries from organisations interested in introducing Camela products into new international markets.
                </p>
                <p className="leading-relaxed mb-4">
                  If you are interested in becoming an Official Importer, please provide information about your organisation, country or region of operation, and your business background. Suitable applicants may be contacted to discuss potential partnership opportunities.
                </p>
                <p className="leading-relaxed">
                  Any appointment as an Official Importer is subject to Camela Group's evaluation and the execution of a separate written agreement.
                </p>
              </section>

              {/* Business Hours */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">Business Hours</motion.h2>
                <p className="leading-relaxed mb-4">
                  Our office operates during the following hours:
                </p>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock size={18} className="text-brand-500 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Monday to Friday</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        9:00 AM – 6:00 PM (Singapore Time)
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Closed on Saturdays, Sundays, and Singapore Public Holidays.
                  </p>
                </div>
              </section>

              {/* Response Time */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">Response Time</motion.h2>
                <p className="leading-relaxed">
                  We aim to respond to enquiries within two (2) business days. Response times may vary depending on the nature of your enquiry and periods of higher enquiry volume.
                </p>
              </section>

              {/* Feedback */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">Feedback</motion.h2>
                <p className="leading-relaxed mb-4">
                  We value your feedback and continuously strive to improve our products, services, and customer experience.
                </p>
                <p className="leading-relaxed">
                  If you have suggestions, compliments, or concerns regarding your experience with Camela Group, we encourage you to contact us. Your feedback helps us improve the quality of our products and services for our customers and business partners.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
