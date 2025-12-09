import { MetadataRoute } from 'next'
import { BASE_URL } from '@/config/constantes'
import { foods } from '@/data/data'

export default function sitemap(): MetadataRoute.Sitemap {
  return foods.map(food => ({
    url: `${BASE_URL}/aliment/${food.name}`,
    lastModified: new Date(),
    priority: 0.7
  }))
}
