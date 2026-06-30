import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, Tag } from 'lucide-react'
import Drawer from '../ui/Drawer'
import { closeCartDrawer, selectCartDrawerOpen } from '../../features/ui/uiSlice'
import { useCart } from '../../hooks/useCart'
import { formatPrice } from '../../utils/formatters'
import { ROUTES } from '../../constants/routes'

const CartDrawer = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const isOpen = useSelector(selectCartDrawerOpen)
  const { items, totals, removeFromCart, updateQuantity } = useCart()

  const close = () => dispatch(closeCartDrawer())

  return (
    <Drawer
      isOpen={isOpen}
      onClose={close}
      title={`${t('nav.cart')} (${items.length})`}
      footer={
        items.length > 0 ? (
          <div className="space-y-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>{t('cart.subtotal')}</span>
                <span>{formatPrice(totals.subtotal)}</span>
              </div>
              {totals.discount > 0 && (
                <div className="flex justify-between text-green-600 dark:text-green-400">
                  <span>{t('cart.discount')}</span>
                  <span>-{formatPrice(totals.discount)}</span>
                </div>
              )}
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>{t('cart.shipping')}</span>
                <span>{totals.shipping === 0 ? t('cart.free') : formatPrice(totals.shipping)}</span>
              </div>
              <div className="flex justify-between font-semibold text-gray-900 dark:text-white text-base pt-2 border-t border-gray-100 dark:border-gray-800">
                <span>{t('cart.total')}</span>
                <span>{formatPrice(totals.total)}</span>
              </div>
            </div>
            <Link
              to={ROUTES.CHECKOUT}
              onClick={close}
              className="btn-brand btn-lg w-full justify-center gap-2"
            >
              {t('cart.checkout')}
              <ArrowRight size={17} />
            </Link>
            <Link
              to={ROUTES.CART}
              onClick={close}
              className="btn-outline btn-md w-full justify-center text-sm"
            >
              {t('cart.title')}
            </Link>
          </div>
        ) : null
      }
    >
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full py-16 px-6 text-center">
          <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-5">
            <ShoppingBag size={32} className="text-gray-300 dark:text-gray-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {t('cart.empty')}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {t('cart.emptyDesc')}
          </p>
          <Link to={ROUTES.SHOP} onClick={close} className="btn-brand btn-md">
            {t('cart.continueShopping')}
          </Link>
        </div>
      ) : (
        <div className="divide-y divide-gray-100 dark:divide-gray-800">
          {/* Free shipping notice */}
          {totals.subtotal < 75 && (
            <div className="px-6 py-3 bg-brand-50 dark:bg-brand-900/20 flex items-center gap-2">
              <Tag size={13} className="text-brand-600 dark:text-brand-400 flex-shrink-0" />
              <p className="text-xs text-brand-700 dark:text-brand-300">
                {t('cart.addMore')}{' '}
                <span className="font-semibold">{formatPrice(75 - totals.subtotal)}</span>{' '}
                {t('cart.forFreeShipping')}
              </p>
            </div>
          )}

          <AnimatePresence initial={false}>
            {items.map((item) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="flex gap-4 px-6 py-4 overflow-hidden"
              >
                <Link
                  to={`/product/${item.id}`}
                  onClick={close}
                  className="flex-shrink-0 w-18 h-18 w-[72px] h-[72px] bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain p-1"
                  />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={close}
                    className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 hover:text-brand-600 dark:hover:text-brand-400 transition-colors leading-snug"
                  >
                    {item.title}
                  </Link>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {item.selectedSize && (
                      <span className="text-xs text-gray-400">{t('product.size')}: {item.selectedSize}</span>
                    )}
                    {item.selectedColor && (
                      <span className="text-xs text-gray-400">{t('product.color')}: {item.selectedColor}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-2.5">
                    <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-0.5">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center rounded-md text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-medium text-gray-900 dark:text-white w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center rounded-md text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.key)}
                        className="text-gray-300 dark:text-gray-600 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </Drawer>
  )
}

export default CartDrawer
