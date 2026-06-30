import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  loginUser,
  registerUser,
  logout,
  updateUser,
  selectAuth,
  selectUser,
  selectIsAuthenticated,
  selectAuthLoading,
} from '../features/auth/authSlice'
import { clearCart } from '../features/cart/cartSlice'
import { clearWishlist } from '../features/wishlist/wishlistSlice'
import { ROUTES } from '../constants/routes'

export const useAuth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useSelector(selectAuth)
  const user = useSelector(selectUser)
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const loading = useSelector(selectAuthLoading)

  const handleLogin = async (credentials) => {
    const result = await dispatch(loginUser(credentials))
    if (loginUser.fulfilled.match(result)) {
      navigate(ROUTES.DASHBOARD)
      return { success: true }
    }
    return { success: false, error: result.payload }
  }

  const handleRegister = async (userData) => {
    const result = await dispatch(registerUser(userData))
    if (registerUser.fulfilled.match(result)) {
      navigate(ROUTES.DASHBOARD)
      return { success: true }
    }
    return { success: false, error: result.payload }
  }

  const handleLogout = () => {
    dispatch(logout())
    dispatch(clearCart())
    dispatch(clearWishlist())
    navigate(ROUTES.HOME)
  }

  const handleUpdateUser = (data) => dispatch(updateUser(data))

  return {
    user,
    isAuthenticated,
    loading,
    error: auth.error,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
    updateUser: handleUpdateUser,
  }
}
