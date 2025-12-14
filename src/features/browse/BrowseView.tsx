import { useState, useEffect } from 'react'
import { Container } from '../../components/layout/Container'
import { SearchBar } from '../../components/movies/SearchBar'
import { TrendingMovies } from '../../components/movies/TrendingMovies'
import { MovieGrid } from '../../components/movies/MovieGrid'
import { Loader } from '../../components/common/Loader'
import { tmdbService } from '../../services/tmdb.service'
import { Movie } from '../../types/movie.types'

export default function BrowseView() {
  const [topMovies, setTopMovies] = useState<Movie[]>([])
  const [allMovies, setAllMovies] = useState<Movie[]>([])
  const [searchResults, setSearchResults] = useState<Movie[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true)
        setError(null)

        const [topRatedResponse, allMoviesResponse] = await Promise.all([
          tmdbService.getTopRatedMovies(1),
          tmdbService.getAllMovies(1)
        ])

        setTopMovies(topRatedResponse.results)
        setAllMovies(allMoviesResponse.results)
      } catch (err) {
        setError('Failed to load movies. Please try again later.')
        console.error('Error fetching movies:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchInitialData()
  }, [])

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setIsSearching(false)
      setSearchResults([])
      return
    }

    try {
      setIsSearching(true)
      const response = await tmdbService.searchMovies(query)
      setSearchResults(response.results)
    } catch (err) {
      console.error('Search error:', err)
      setSearchResults([])
    }
  }

  if (loading) {
    return <Loader />
  }

  if (error) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center" style={{ backgroundColor: '#0B0F29' }}>
        <div className="text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-white mb-2">Error Loading Movies</h2>
          <p className="text-gray-400 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 rounded-lg font-bold text-white transition-all"
            style={{ backgroundColor: '#00FFFF', color: '#0A0E27' }}
          >
            RELOAD PAGE
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0B0F29', paddingTop: '5rem' }}>
      {/* ENHANCED Hero Section - More Compact & Colorful */}
      <div className="relative overflow-hidden" style={{ paddingTop: '2.5rem', paddingBottom: '3rem' }}>
        
        {/* ENHANCED Colorful Gradient Overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Vibrant animated gradients */}
          <div 
            className="absolute rounded-full blur-3xl animate-pulse"
            style={{ 
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(147, 51, 234, 0.15) 50%, transparent 100%)',
              top: '-100px',
              left: '10%',
              animation: 'float 8s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute rounded-full blur-3xl animate-pulse"
            style={{ 
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(37, 99, 235, 0.15) 50%, transparent 100%)',
              top: '-150px',
              right: '10%',
              animation: 'float 10s ease-in-out infinite',
              animationDelay: '2s'
            }}
          />
          <div 
            className="absolute rounded-full blur-3xl animate-pulse"
            style={{ 
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, rgba(219, 39, 119, 0.1) 50%, transparent 100%)',
              top: '50px',
              left: '40%',
              animation: 'float 12s ease-in-out infinite',
              animationDelay: '4s'
            }}
          />
          
          {/* Gradient overlay for better text contrast */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)',
            mixBlendMode: 'overlay'
          }} />
        </div>

        <Container className="relative z-10">
          <div className="text-center">
            {/* Compact 3D Movie Poster Stack */}
            <div className="flex justify-center mb-8">
              <div className="relative" style={{ height: '240px' }}>
                {topMovies.slice(0, 3).map((movie, index) => (
                  <div
                    key={movie.id}
                    className="absolute rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-110 hover:z-50"
                    style={{
                      width: '160px',
                      height: '240px',
                      transform: `translateX(${(index - 1) * 90}px) rotate(${(index - 1) * 10}deg) translateZ(${index * 10}px)`,
                      zIndex: 3 - index,
                      border: '3px solid rgba(255, 255, 255, 0.15)',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
                    }}
                  >
                    <img
                      src={tmdbService.getImageUrl(movie.poster_path)}
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Holographic shine effect */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
                      pointerEvents: 'none'
                    }} />
                  </div>
                ))}
              </div>
            </div>

            {/* FUNKY FUTURISTIC Title */}
            <div className="mb-4">
              <h1 style={{
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                fontWeight: '900',
                fontFamily: 'Orbitron, sans-serif',
                color: 'white',
                lineHeight: '1.1',
                marginBottom: '1rem',
                textShadow: '0 0 40px rgba(168, 85, 247, 0.5), 0 0 80px rgba(59, 130, 246, 0.3)',
                letterSpacing: '-0.02em'
              }}>
                Find{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 50%, #3B82F6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  position: 'relative',
                  display: 'inline-block',
                  animation: 'gradient-shift 3s ease infinite'
                }}>
                  Movies
                  {/* Glowing underline */}
                  <span style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '0',
                    right: '0',
                    height: '4px',
                    background: 'linear-gradient(90deg, #A855F7, #EC4899, #3B82F6)',
                    borderRadius: '2px',
                    filter: 'blur(4px)',
                    animation: 'glow-pulse 2s ease-in-out infinite'
                  }} />
                </span>{' '}
                You'll Love
              </h1>
            </div>
            
            {/* Enhanced Subtext */}
            <p style={{
              fontSize: 'clamp(1rem, 3vw, 1.5rem)',
              color: '#E0E7FF',
              marginBottom: '2rem',
              fontWeight: '500',
              letterSpacing: '0.05em',
              textShadow: '0 2px 20px rgba(168, 85, 247, 0.4)'
            }}>
              Without the <span style={{
                color: '#A855F7',
                fontWeight: '700',
                textShadow: '0 0 20px rgba(168, 85, 247, 0.8)'
              }}>Hassle</span>
            </p>

            {/* Search Bar */}
            <SearchBar onSearch={handleSearch} />
          </div>
        </Container>

        {/* Bottom gradient fade */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(to top, #0B0F29, transparent)',
          pointerEvents: 'none'
        }} />
      </div>

      {/* Spacing before content - Reduced but still generous */}
      <div style={{ marginBottom: '3rem' }} />

      <Container>
        {isSearching ? (
          <>
            {searchResults.length > 0 ? (
              <MovieGrid movies={searchResults} title="Search Results" />
            ) : (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No Movies Found</h3>
                <p className="text-gray-400">Try searching with different keywords</p>
              </div>
            )}
          </>
        ) : (
          <>
            <TrendingMovies movies={topMovies} />
            <MovieGrid movies={allMovies} title="All Movies" />
          </>
        )}
      </Container>
    </div>
  )
}