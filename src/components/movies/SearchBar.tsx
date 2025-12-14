import { useState, useEffect } from 'react'
import { useDebounce } from '../../hooks/useDebounce'

interface SearchBarProps {
  onSearch: (query: string) => void
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const debouncedQuery = useDebounce(searchQuery, 500)

  useEffect(() => {
    if (debouncedQuery) {
      onSearch(debouncedQuery)
    }
  }, [debouncedQuery, onSearch])

  return (
    <div className="relative mx-auto" style={{ maxWidth: '600px' }}> {/* Reduced from 768px to 600px */}
      <div className="relative">
        {/* Search Icon */}
        <div className="absolute left-5 top-1/2 text-gray-400" style={{ transform: 'translateY(-50%)' }}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Input Field - Narrower with More Rounded Corners */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search through 300+ movies online"
          className="w-full text-base text-white transition-all duration-300"
          style={{
            backgroundColor: '#1A1F3D',
            paddingLeft: '3.5rem',
            paddingRight: '3rem',
            paddingTop: '0.875rem',  // Slightly reduced padding
            paddingBottom: '0.875rem',
            border: 'none',
            outline: 'none',
            borderRadius: '1rem'  // Increased from 0.75rem (12px) to 1rem (16px)
          }}
          onFocus={(e) => {
            e.target.style.boxShadow = '0 0 0 2px rgba(168, 85, 247, 0.5)'
          }}
          onBlur={(e) => {
            e.target.style.boxShadow = 'none'
          }}
        />

        {/* Clear Button */}
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-1/2 text-gray-400 hover:text-white transition-colors"
            style={{ transform: 'translateY(-50%)' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}