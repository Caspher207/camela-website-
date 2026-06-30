import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import { VALID_COUPONS, TAX_RATE } from '../../constants/config'

const initialState = {
  items: [],
  couponCode: '',
  couponDiscount: 0,
  couponType: null,
  couponDescription: '',
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity = 1, selectedSize, selectedColor } = action.payload
      const itemKey = `${product.id}-${selectedSize || 'default'}-${selectedColor || 'default'}`
      const existing = state.items.find((item) => item.key === itemKey)

      if (existing) {
        existing.quantity += quantity
        toast.success('Cart updated')
      } else {
        state.items.push({
          key: itemKey,
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          category: product.category,
          quantity,
          selectedSize: selectedSize || null,
          selectedColor: selectedColor || null,
          rating: product.rating,
        })
        toast.success('Added to cart!')
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.key !== action.payload)
      toast.success('Item removed from cart')
    },

    updateQuantity: (state, action) => {
      const { key, quantity } = action.payload
      const item = state.items.find((i) => i.key === key)
      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter((i) => i.key !== key)
          toast.success('Item removed')
        } else {
          item.quantity = quantity
        }
      }
    },

    clearCart: (state) => {
      state.items = []
      state.couponCode = ''
      state.couponDiscount = 0
      state.couponType = null
      state.couponDescription = ''
    },

    applyCoupon: (state, action) => {
      const code = action.payload.toUpperCase()
      const coupon = VALID_COUPONS[code]
      if (coupon) {
        state.couponCode = code
        state.couponDiscount = coupon.discount
        state.couponType = coupon.type
        state.couponDescription = coupon.description
        toast.success(`Coupon applied: ${coupon.description}`)
      } else {
        toast.error('Invalid coupon code')
      }
    },

    removeCoupon: (state) => {
      state.couponCode = ''
      state.couponDiscount = 0
      state.couponType = null
      state.couponDescription = ''
      toast.success('Coupon removed')
    },
  },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart, applyCoupon, removeCoupon } =
  cartSlice.actions

export const selectCartItems = (state) => state.cart.items
export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0)
export const selectCartSubtotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0)

export const selectCartTotals = (state) => {
  const subtotal = state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
  const { couponDiscount, couponType } = state.cart
  let discount = 0
  if (couponType === 'percent') {
    discount = subtotal * couponDiscount
  } else if (couponType === 'fixed') {
    discount = Math.min(couponDiscount, subtotal)
  }
  const afterDiscount = subtotal - discount
  const shipping = afterDiscount >= 75 || afterDiscount === 0 ? 0 : 5.99
  const tax = afterDiscount * TAX_RATE
  const total = afterDiscount + shipping + tax
  return { subtotal, discount, shipping, tax, total }
}

export const selectCoupon = (state) => ({
  code: state.cart.couponCode,
  discount: state.cart.couponDiscount,
  type: state.cart.couponType,
  description: state.cart.couponDescription,
})

export default cartSlice.reducer
