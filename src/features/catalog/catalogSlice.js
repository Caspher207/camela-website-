import { createSlice } from '@reduxjs/toolkit'

const loadFromStorage = () => {
  try {
    const stored = localStorage.getItem('camela_products')
    if (stored) {
      const data = JSON.parse(stored)
      return {
        products: data.products || [],
        nextId: data.nextId || 1,
      }
    }
  } catch (e) {
    console.error('Failed to load products from localStorage:', e)
  }
  return {
    products: [],
    nextId: 1,
  }
}

const saveToStorage = (state) => {
  try {
    localStorage.setItem('camela_products', JSON.stringify({
      products: state.products,
      nextId: state.nextId,
    }))
  } catch (e) {
    console.error('Failed to save products to localStorage:', e)
  }
}

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: loadFromStorage(),
  reducers: {
    addProduct: (state, action) => {
      state.products.push({
        ...action.payload,
        id: state.nextId,
        rating: { rate: 0, count: 0 },
        active: true,
        stock: Number(action.payload.stock) || 0,
        createdAt: new Date().toISOString(),
        images: action.payload.images || (action.payload.image ? [action.payload.image] : []),
      })
      state.nextId += 1
      saveToStorage(state)
    },
    updateProduct: (state, action) => {
      const idx = state.products.findIndex((p) => p.id === action.payload.id)
      if (idx !== -1) {
        const updated = { ...state.products[idx], ...action.payload }
        // Handle images array - if images provided, use it; if single image provided, convert to array
        if (action.payload.images) {
          updated.images = action.payload.images
        } else if (action.payload.image !== undefined) {
          updated.images = [action.payload.image]
        }
        state.products[idx] = updated
        saveToStorage(state)
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload)
      saveToStorage(state)
    },
    setProductActive: (state, action) => {
      const p = state.products.find((p) => p.id === action.payload.id)
      if (p) {
        p.active = action.payload.active
        saveToStorage(state)
      }
    },
    updateStock: (state, action) => {
      const p = state.products.find((p) => p.id === action.payload.id)
      if (p) {
        p.stock = action.payload.stock
        saveToStorage(state)
      }
    },
  },
})

export const { addProduct, updateProduct, removeProduct, setProductActive, updateStock } =
  catalogSlice.actions

export const selectAllProducts = (state) => state.catalog.products
export const selectActiveProducts = (state) =>
  state.catalog.products.filter((p) => p.active !== false)
export const selectProductById = (id) => (state) =>
  state.catalog.products.find((p) => p.id === Number(id) || p.id === id)
export const selectProductsByCategory = (category) => (state) =>
  state.catalog.products.filter((p) => p.active !== false && p.category === category)
export const selectCategories = (state) => [
  ...new Set(state.catalog.products.map((p) => p.category).filter(Boolean)),
]

export default catalogSlice.reducer
