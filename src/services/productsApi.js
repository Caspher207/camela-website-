import { apiSlice } from './api'

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ limit = 20 } = {}) => `/products?limit=${limit}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Product', id })),
              { type: 'Products', id: 'LIST' },
            ]
          : [{ type: 'Products', id: 'LIST' }],
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: (result, error, id) => [{ type: 'Product', id }],
    }),
    getCategories: builder.query({
      query: () => '/products/categories',
      providesTags: ['Categories'],
    }),
    getProductsByCategory: builder.query({
      query: (category) => `/products/category/${encodeURIComponent(category)}`,
      providesTags: (result, error, category) => [
        { type: 'Products', id: `CATEGORY_${category}` },
      ],
    }),
    getLimitedProducts: builder.query({
      query: ({ limit = 8, sort = 'asc' } = {}) => `/products?limit=${limit}&sort=${sort}`,
      providesTags: [{ type: 'Products', id: 'LIMITED' }],
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
  useGetLimitedProductsQuery,
} = productsApiSlice
