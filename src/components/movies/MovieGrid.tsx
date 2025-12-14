import { Movie } from '../../types/movie.types'
import { MovieCard } from './MovieCard'

interface MovieGridProps {
  movies: Movie[]
  title: string
  isHorizontalScroll?: boolean
}

export const MovieGrid = ({ movies, title, isHorizontalScroll = false }: MovieGridProps) => {
  if (movies.length === 0) return null

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-white mb-8">
        {title}
      </h2>

      {isHorizontalScroll ? (
        <div className="flex overflow-x-auto pb-4" style={{ gap: '2rem' }}>
          {movies.map((movie) => (
            <div key={movie.id} style={{ flexShrink: 0, width: '14rem' }}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      ) : (
        /* Increased gap from 1.5rem to 2rem (24px to 32px) */
        <div 
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '2rem'  // Increased from 1.5rem
          }}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}