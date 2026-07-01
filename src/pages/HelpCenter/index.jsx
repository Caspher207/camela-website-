import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, HelpCircle } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const FAQItem = ({ q, a }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{q}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{a}</p>
    </div>
  )
}

const HelpCenter = () => {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      {/* Header */}
      <section className="bg-gray-950 py-20">
        <div className="container max-w-4xl px-4">
          <motion.div {...fadeUp(0)} className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-400 text-xs font-semibold uppercase tracking-widest mb-6">
              <HelpCircle size={12} />
              Support & Assistance
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
              Help Center
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
              Welcome to the Camela Help Center. We are committed to providing timely support and assistance to our members, customers, distribution partners, and official importers. If you cannot find the information you are looking for, please contact our Customer Support team using the contact details provided at the end of this page.
            </p>

            <div className="space-y-16">
              {/* Shopping & Orders */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">1. Shopping & Orders</motion.h2>
                <div className="space-y-4">
                  <FAQItem 
                    q="How do I place an order?"
                    a="Browse our products, add your selected items to your shopping cart, and complete the checkout process by following the on-screen instructions."
                  />
                  <FAQItem 
                    q="Can I modify or cancel my order?"
                    a="If you need to modify or cancel your order, please contact us as soon as possible. We will make every reasonable effort to assist you before your order has been processed or dispatched. Once an order has been shipped, changes or cancellations may no longer be possible."
                  />
                  <FAQItem 
                    q="How will I know if my order has been received?"
                    a="Once your order has been successfully placed, you should receive an order confirmation email. If you do not receive the confirmation, please check your spam or junk folder before contacting us."
                  />
                </div>
              </section>

              {/* Membership */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">2. Membership</motion.h2>
                <div className="space-y-4">
                  <FAQItem 
                    q="What is a Camela Member?"
                    a="Camela Members are individuals who wish to enjoy a closer relationship with Camela Group and receive updates on our products, wellness initiatives, and future member programmes."
                  />
                  <FAQItem 
                    q="How do I become a member?"
                    a="You may register through our website by selecting the Become a Member option and completing the required registration information."
                  />
                  <FAQItem 
                    q="Are there membership benefits?"
                    a="Camela may offer exclusive member benefits, promotional offers, educational resources, or other programmes from time to time. Available benefits may change without prior notice."
                  />
                </div>
              </section>

              {/* Distribution Partners */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">3. Distribution Partners</motion.h2>
                <div className="space-y-4">
                  <FAQItem 
                    q="Who can become a Distribution Partner?"
                    a="Camela welcomes businesses and entrepreneurs interested in distributing our products within approved markets. Applications are subject to our evaluation and approval process."
                  />
                  <FAQItem 
                    q="How do I apply?"
                    a="You may submit your interest through the Distribution Partner section of our website or contact our Business Development team for further information."
                  />
                  <FAQItem 
                    q="What support does Camela provide?"
                    a="Support available to approved Distribution Partners may vary depending on the partnership arrangement and may include product information, marketing materials, and business support."
                  />
                </div>
              </section>

              {/* Official Importers */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">4. Official Importers</motion.h2>
                <div className="space-y-4">
                  <FAQItem 
                    q="Who can become an Official Importer?"
                    a="Camela welcomes qualified organisations interested in representing our products within their respective countries or regions."
                  />
                  <FAQItem 
                    q="How do I apply?"
                    a="Please submit your enquiry through the Official Importer section of our website or contact our Business Development team to discuss partnership opportunities."
                  />
                  <FAQItem 
                    q="Does Camela grant exclusive territories?"
                    a="Any distribution rights, territory arrangements, or commercial agreements are subject to separate negotiations and written agreements between Camela Group and the approved business partner."
                  />
                </div>
              </section>

              {/* Products */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">5. Products</motion.h2>
                <div className="space-y-4">
                  <FAQItem 
                    q="Where can I find product information?"
                    a="Detailed product descriptions, ingredients, directions for use, and other relevant information are available on each product page. Please read all product information carefully before making a purchase."
                  />
                  <FAQItem 
                    q="Are your products intended to diagnose, treat, cure, or prevent diseases?"
                    a="No. The information provided on our website is intended for general informational and educational purposes only and should not be regarded as medical advice. Our products are not intended to diagnose, treat, cure, or prevent any disease. If you have any medical concerns, please consult a qualified healthcare professional before using our products."
                  />
                </div>
              </section>

              {/* Shipping & Delivery */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">6. Shipping & Delivery</motion.h2>
                <div className="space-y-4">
                  <FAQItem 
                    q="Where do you deliver?"
                    a="Available delivery destinations and shipping options will be displayed during checkout. If you require additional information regarding delivery to your location, please contact us before placing your order."
                  />
                  <FAQItem 
                    q="How long does delivery take?"
                    a="Delivery times vary depending on the destination and shipping method selected. Any estimated delivery times are provided for guidance only and may be affected by circumstances beyond our reasonable control."
                  />
                </div>
              </section>

              {/* Returns & Refunds */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">7. Returns & Refunds</motion.h2>
                <div className="space-y-4">
                  <FAQItem 
                    q="Can I return a product?"
                    a="Returns, exchanges, and refunds are subject to our Returns Policy. Please refer to the Returns Policy for information regarding eligibility, conditions, and procedures."
                  />
                  <FAQItem 
                    q="What should I do if I receive a damaged or incorrect product?"
                    a="Please contact us promptly with your order number and a description of the issue. Where possible, include photographs of the product and packaging to assist us in reviewing your request."
                  />
                </div>
              </section>

              {/* Payments */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">8. Payments</motion.h2>
                <div className="space-y-4">
                  <FAQItem 
                    q="What payment methods do you accept?"
                    a="Available payment methods will be displayed during checkout. Payments are processed securely through authorised third-party payment service providers."
                  />
                  <FAQItem 
                    q="Is my payment information secure?"
                    a="Yes. Camela Group does not store your complete credit card, debit card, or banking information on its servers. Payment information is securely processed by authorised third-party payment service providers."
                  />
                </div>
              </section>

              {/* Contact Us */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">9. Contact Us</motion.h2>
                <p className="leading-relaxed mb-6">
                  If you require further assistance or have any questions regarding our products, membership, distribution opportunities, or import partnerships, please contact us.
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

export default HelpCenter
