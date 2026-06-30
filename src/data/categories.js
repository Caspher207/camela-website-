export const CATEGORIES = [
  {
    id: 'personal-care',
    name: 'Personal Care',
    slug: 'personal-care',
    description: 'Hygiene & personal wellness',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80',
    color: 'from-blue-500 to-cyan-400',
    count: 0,
  },
  {
    id: 'skincare',
    name: 'Skincare',
    slug: 'skincare',
    description: 'Natural skincare solutions',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    color: 'from-brand-500 to-brand-400',
    count: 0,
  },
]

export const getCategoryBySlug = (slug) => CATEGORIES.find((c) => c.slug === slug)

export const getCategoryName = (slug) => {
  const cat = getCategoryBySlug(slug)
  return cat ? cat.name : slug
}
