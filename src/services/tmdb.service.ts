const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL || 'https://api.themoviedb.org/3'

const headers = {
  'Authorization': `Bearer ${API_KEY}`,
  'Content-Type': 'application/json'
}

export const tmdbService = {
  async searchMovies(query: string, page: number = 1) {
    try {
      const response = await fetch(
        `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&page=${page}`,
        { headers }
      )
      if (!response.ok) throw new Error('Failed to search movies')
      return await response.json()
    } catch (error) {
      console.error('Search movies error:', error)
      throw error
    }
  },

  async getTopRatedMovies(page: number = 1) {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/top_rated?page=${page}`,
        { headers }
      )
      if (!response.ok) throw new Error('Failed to fetch top rated movies')
      return await response.json()
    } catch (error) {
      console.error('Get top rated movies error:', error)
      throw error
    }
  },

  async getAllMovies(page: number = 1) {
    try {
      const response = await fetch(
        `${BASE_URL}/discover/movie?page=${page}&sort_by=popularity.desc`,
        { headers }
      )
      if (!response.ok) throw new Error('Failed to fetch all movies')
      return await response.json()
    } catch (error) {
      console.error('Get all movies error:', error)
      throw error
    }
  },

  getImageUrl(path: string | null, size: string = 'w500'): string {
    if (!path) return '/no-movie.png'
    return `https://image.tmdb.org/t/p/${size}${path}`
  }
}