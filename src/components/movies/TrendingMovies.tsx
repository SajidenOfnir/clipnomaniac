import { Movie } from '../../types/movie.types'
import { tmdbService } from '../../services/tmdb.service'

interface TrendingMoviesProps {
  movies: Movie[]
}

export const TrendingMovies = ({ movies }: TrendingMoviesProps) => {
  if (movies.length === 0) return null

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: 'Orbitron, sans-serif' }}>
        Trending Movies
      </h2>
      
      <div className="relative">
        <div className="flex overflow-x-auto pb-4" 
             style={{ 
               gap: '2.5rem',
               scrollbarWidth: 'thin',
               scrollbarColor: '#374151 transparent'
             }}>
          {movies.slice(0, 5).map((movie, index) => (
            <div key={movie.id} className="relative flex-none cursor-pointer group">
              {/* Large Number Background */}
              <div 
                className="absolute select-none pointer-events-none font-black leading-none"
                style={{ 
                  left: '-2rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: '180px',
                  background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.3))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  WebkitTextStroke: '2px rgba(255, 255, 255, 0.1)'
                }}
              >
                {index + 1}
              </div>
              
              {/* ENHANCED Movie Poster Card - More Rounded */}
              <div 
                className="relative overflow-hidden shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-purple-500/30"
                style={{
                  width: '14rem',
                  aspectRatio: '2/3',
                  borderRadius: '1.5rem', // More rounded - 24px
                  border: '2px solid rgba(168, 85, 247, 0.3)',
                  zIndex: 10,
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)'
                }}
              >
                <img
                  src={tmdbService.getImageUrl(movie.poster_path)}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/no-movie.png'
                  }}
                />
                
                {/* Enhanced Gradient Overlay */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 100%)'
                  }}
                />
                
                {/* Movie Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-sm line-clamp-2 mb-1" style={{
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)'
                  }}>
                    {movie.title}
                  </h3>
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    <svg style={{ width: '12px', height: '12px', fill: '#FBBF24' }} viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span className="text-xs text-gray-200 font-semibold">{movie.vote_average.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}