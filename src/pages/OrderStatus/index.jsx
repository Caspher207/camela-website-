import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Package, CheckCircle, Truck, AlertCircle, HelpCircle } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const OrderStatus = () => {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      {/* Header */}
      <section className="bg-gray-950 py-20">
        <div className="container max-w-4xl px-4">
          <motion.div {...fadeUp(0)} className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-400 text-xs font-semibold uppercase tracking-widest mb-6">
              <Package size={12} />
              Track Your Order
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
              Order Status
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
              Camela Group is committed to keeping you informed throughout the order fulfilment process. This page explains the different stages of your order and how you can obtain updates regarding its status.
            </p>

            <div className="space-y-12">
              {/* Order Confirmation */}
              <section>
                <motion.div {...fadeUp(0)} className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={24} className="text-green-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">1. Order Confirmation</h2>
                    <p className="leading-relaxed">
                      Once your order has been successfully placed and payment has been received, you should receive an order confirmation email containing your order details.
                    </p>
                    <p className="leading-relaxed mt-2">
                      If you do not receive an order confirmation, please check your spam or junk folder before contacting us.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Order Processing */}
              <section>
                <motion.div {...fadeUp(0)} className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Package size={24} className="text-blue-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">2. Order Processing</h2>
                    <p className="leading-relaxed">
                      After your order has been confirmed, our team will begin preparing your items for shipment.
                    </p>
                    <p className="leading-relaxed mt-2">
                      During this stage, your order is being verified, packed, and prepared for dispatch.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Order Dispatched */}
              <section>
                <motion.div {...fadeUp(0)} className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <Truck size={24} className="text-purple-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">3. Order Dispatched</h2>
                    <p className="leading-relaxed">
                      Once your order has been dispatched, it will be handed over to our delivery partner for shipment to your selected delivery address.
                    </p>
                    <p className="leading-relaxed mt-2">
                      Where available, shipment updates or tracking information may be provided by the delivery service.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Order Delivered */}
              <section>
                <motion.div {...fadeUp(0)} className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={24} className="text-brand-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">4. Order Delivered</h2>
                    <p className="leading-relaxed">
                      Your order is considered complete once it has been delivered to the shipping address provided during checkout.
                    </p>
                    <p className="leading-relaxed mt-2">
                      Please inspect your order upon delivery. If you believe your order is damaged, incomplete, or incorrect, please contact us as soon as reasonably practicable.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Delays */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">5. Delays</motion.h2>
                <p className="leading-relaxed mb-4">
                  While we strive to process and deliver orders promptly, delays may occasionally occur due to circumstances beyond our reasonable control, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>High order volumes</li>
                  <li>Public holidays</li>
                  <li>Courier delays</li>
                  <li>Customs clearance</li>
                  <li>Severe weather conditions</li>
                  <li>Other unforeseen events</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  We appreciate your patience should any delays occur.
                </p>
              </section>

              {/* Need Assistance */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">6. Need Assistance?</motion.h2>
                <p className="leading-relaxed mb-4">
                  If you have questions regarding your order or require assistance, please contact our Customer Support team.
                </p>
                <p className="leading-relaxed mb-4">Where applicable, please provide:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your full name</li>
                  <li>Order number</li>
                  <li>Email address used for the purchase</li>
                  <li>A brief description of your enquiry</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Providing this information will help us locate your order more efficiently.
                </p>
              </section>

              {/* Contact Us */}
              <section>
                <motion.h2 {...fadeUp(0)} className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">7. Contact Us</motion.h2>
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

export default OrderStatus
