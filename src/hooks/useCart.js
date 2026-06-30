import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  applyCoupon,
  removeCoupon,
  selectCartItems,
  selectCartCount,
  selectCartSubtotal,
  selectCartTotals,
  selectCoupon,
} from '../features/cart/cartSlice'
import { openCartDrawer } from '../features/ui/uiSlice'

export const useCart = () => {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const count = useSelector(selectCartCount)
  const subtotal = useSelector(selectCartSubtotal)
  const totals = useSelector(selectCartTotals)
  const coupon = useSelector(selectCoupon)

  const handleAddToCart = (product, quantity = 1, selectedSize = null, selectedColor = null) => {
    dispatch(addToCart({ product, quantity, selectedSize, selectedColor }))
    dispatch(openCartDrawer())
  }

  const handleRemoveFromCart = (key) => dispatch(removeFromCart(key))

  const handleUpdateQuantity = (key, quantity) => dispatch(updateQuantity({ key, quantity }))

  const handleClearCart = () => dispatch(clearCart())

  const handleApplyCoupon = (code) => dispatch(applyCoupon(code))

  const handleRemoveCoupon = () => dispatch(removeCoupon())

  const isInCart = (productId) => items.some((item) => item.id === productId)

  return {
    items,
    count,
    subtotal,
    totals,
    coupon,
    addToCart: handleAddToCart,
    removeFromCart: handleRemoveFromCart,
    updateQuantity: handleUpdateQuantity,
    clearCart: handleClearCart,
    applyCoupon: handleApplyCoupon,
    removeCoupon: handleRemoveCoupon,
    isInCart,
  }
}
