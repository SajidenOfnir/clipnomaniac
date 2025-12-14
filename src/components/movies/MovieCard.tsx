import { Movie } from '../../types/movie.types'
import { tmdbService } from '../../services/tmdb.service'

interface MovieCardProps {
  movie: Movie
  onClick?: () => void
}

export const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  const year = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'
  const rating = movie.vote_average.toFixed(1)

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105"
      style={{ 
        backgroundColor: '#1A1F3D',
        borderRadius: '1.25rem', // More rounded - 20px
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
      }}
    >
      {/* Movie Poster */}
      <div className="relative overflow-hidden bg-gray-900" style={{ aspectRatio: '2/3' }}>
        <img
          src={tmdbService.getImageUrl(movie.poster_path)}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = '/no-movie.png'
          }}
        />
        
        {/* FIXED Rating Badge with proper star */}
        <div 
          className="absolute top-3 right-3 px-3 py-1.5 flex items-center gap-1.5 transition-all duration-300 group-hover:scale-110"
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(12px)',
            borderRadius: '0.75rem',
            border: '1px solid rgba(251, 191, 36, 0.3)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* FIXED: Using SVG star instead of emoji */}
          <svg 
            style={{ width: '16px', height: '16px', fill: '#FBBF24' }} 
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span className="text-sm font-bold text-white">{rating}</span>
        </div>

        {/* Gradient overlay on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(to top, rgba(168, 85, 247, 0.4) 0%, transparent 50%)'
          }}
        />
      </div>

      {/* Movie Info */}
      <div style={{ padding: '1.25rem' }}>
        <h3 
          className="text-white font-bold text-base mb-2 line-clamp-1 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text"
          style={{
            backgroundImage: 'linear-gradient(135deg, #A855F7, #EC4899)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text'
          }}
        >
          {movie.title}
        </h3>
        
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="uppercase font-semibold">{movie.original_language}</span>
          <span>•</span>
          <span className="font-medium">{year}</span>
        </div>
      </div>
    </div>
  )
}