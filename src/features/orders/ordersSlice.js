import { createSlice } from '@reduxjs/toolkit'

// Load orders from localStorage
const loadOrdersFromStorage = () => {
  try {
    const stored = localStorage.getItem('camela_orders')
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.error('Failed to load orders from localStorage:', error)
    return []
  }
}

// Save orders to localStorage
const saveOrdersToStorage = (orders) => {
  try {
    localStorage.setItem('camela_orders', JSON.stringify(orders))
  } catch (error) {
    console.error('Failed to save orders to localStorage:', error)
  }
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: loadOrdersFromStorage(),
    currentOrder: null,
  },
  reducers: {
    placeOrder: (state, action) => {
      const order = {
        id: 'ORD-' + Date.now(),
        ...action.payload,
        status: 'confirmed',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        timeline: [
          { status: 'confirmed', label: 'Order Confirmed', date: new Date().toISOString() },
        ],
      }
      state.orders.unshift(order)
      state.currentOrder = order
      saveOrdersToStorage(state.orders)
    },
    setCurrentOrder: (state, action) => {
      state.currentOrder = action.payload
    },
    updateOrderStatus: (state, action) => {
      const { id, status } = action.payload
      const order = state.orders.find((o) => o.id === id)
      if (order) {
        order.status = status
        order.updatedAt = new Date().toISOString()
        
        // Add timeline entry for status change
        const statusLabels = {
          confirmed: 'Order Confirmed',
          processing: 'Processing',
          shipped: 'Shipped',
          delivered: 'Delivered',
          cancelled: 'Cancelled',
        }
        
        if (!order.timeline) {
          order.timeline = []
        }
        
        order.timeline.push({
          status,
          label: statusLabels[status] || status,
          date: new Date().toISOString(),
        })
        
        saveOrdersToStorage(state.orders)
      }
    },
  },
})

export const { placeOrder, setCurrentOrder, updateOrderStatus } = ordersSlice.actions

export const selectOrders = (state) => state.orders.orders
export const selectCurrentOrder = (state) => state.orders.currentOrder

export default ordersSlice.reducer
