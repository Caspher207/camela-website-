import { useSelector } from 'react-redux'
import {
  selectActiveProducts,
  selectProductsByCategory,
  selectProductById,
} from '../features/catalog/catalogSlice'

export const useProducts = () => {
  const products = useSelector(selectActiveProducts)
  return { data: products, isLoading: false, isError: false }
}

export const useProductsByCategory = (category) => {
  const products = useSelector(selectProductsByCategory(category))
  return { data: products, isLoading: false, isError: false }
}

export const useProduct = (id) => {
  const product = useSelector(selectProductById(id))
  return {
    data: product || null,
    isLoading: false,
    isError: !product,
    error: !product ? { status: 404 } : null,
  }
}
