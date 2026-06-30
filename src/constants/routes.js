export const ROUTES = {
  HOME: '/',
  SHOP: '/shop',
  SHOP_CATEGORY: '/shop/:category',
  PRODUCT: '/product/:id',
  CART: '/cart',
  WISHLIST: '/wishlist',
  SEARCH: '/search',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  CHECKOUT: '/checkout',
  ORDER_CONFIRMATION: '/order-confirmation/:id',
  DASHBOARD: '/dashboard',
  DASHBOARD_PROFILE: '/dashboard/profile',
  DASHBOARD_ORDERS: '/dashboard/orders',
  DASHBOARD_ORDER_DETAILS: '/dashboard/orders/:id',
  DASHBOARD_WISHLIST: '/dashboard/wishlist',
  DASHBOARD_ADDRESSES: '/dashboard/addresses',
  DASHBOARD_SETTINGS: '/dashboard/settings',
  ABOUT: '/about',
  APPLY: '/apply/:type',
  NOT_FOUND: '*',

  ADMIN: '/admin',
  ADMIN_PRODUCTS: '/admin/products',
  ADMIN_ORDERS: '/admin/orders',
  ADMIN_CUSTOMERS: '/admin/customers',
  ADMIN_ANALYTICS: '/admin/analytics',
  ADMIN_INVENTORY: '/admin/inventory',
  ADMIN_SETTINGS: '/admin/settings',
}

export const getShopCategoryPath = (category) => `/shop/${category}`
export const getProductPath = (id) => `/product/${id}`
export const getOrderConfirmationPath = (id) => `/order-confirmation/${id}`
export const getDashboardOrderPath = (id) => `/dashboard/orders/${id}`
export const getApplyPath = (type) => `/apply/${type}`
