import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export const Header = () => {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const isActive = (path: string) => location.pathname === path

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      backgroundColor: 'rgba(10, 14, 39, 0.95)',
      borderBottom: '1px solid rgba(0, 255, 255, 0.2)',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
    }}>
      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '1rem 1.5rem'
      }}>
        {/* Main Container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          gap: '2rem'
        }}>
          
          {/* LEFT: Logo */}
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Link to="/browse" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #00FFFF 0%, #B026FF 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(0, 255, 255, 0.3)',
                transition: 'all 0.3s ease'
              }}>
                <span style={{ fontSize: '1.5rem' }}>🎬</span>
              </div>
              <h1 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                fontFamily: 'Orbitron, sans-serif',
                color: 'white',
                margin: 0
              }}>
                CLIPNO<span style={{ color: '#00FFFF' }}>MANIAC</span>
              </h1>
            </Link>
          </div>

          {/* CENTER: Navigation */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2.5rem'
          }}>
            <Link to="/browse" style={{
              position: 'relative',
              fontSize: '0.875rem',
              fontWeight: '600',
              fontFamily: 'Orbitron, sans-serif',
              letterSpacing: '0.15em',
              color: isActive('/browse') ? '#00FFFF' : '#9CA3AF',
              textDecoration: 'none',
              padding: '0.5rem 0.25rem',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#00FFFF'}
            onMouseLeave={(e) => e.currentTarget.style.color = isActive('/browse') ? '#00FFFF' : '#9CA3AF'}
            >
              BROWSE
              {isActive('/browse') && (
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(to right, #00FFFF, #B026FF)'
                }} />
              )}
            </Link>

            <Link to="/story" style={{
              position: 'relative',
              fontSize: '0.875rem',
              fontWeight: '600',
              fontFamily: 'Orbitron, sans-serif',
              letterSpacing: '0.15em',
              color: isActive('/story') ? '#00FFFF' : '#9CA3AF',
              textDecoration: 'none',
              padding: '0.5rem 0.25rem',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#00FFFF'}
            onMouseLeave={(e) => e.currentTarget.style.color = isActive('/story') ? '#00FFFF' : '#9CA3AF'}
            >
              STORY
              {isActive('/story') && (
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(to right, #00FFFF, #B026FF)'
                }} />
              )}
            </Link>

            <Link to="/profile" style={{
              position: 'relative',
              fontSize: '0.875rem',
              fontWeight: '600',
              fontFamily: 'Orbitron, sans-serif',
              letterSpacing: '0.15em',
              color: isActive('/profile') ? '#00FFFF' : '#9CA3AF',
              textDecoration: 'none',
              padding: '0.5rem 0.25rem',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#00FFFF'}
            onMouseLeave={(e) => e.currentTarget.style.color = isActive('/profile') ? '#00FFFF' : '#9CA3AF'}
            >
              PROFILE
              {isActive('/profile') && (
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(to right, #00FFFF, #B026FF)'
                }} />
              )}
            </Link>
          </nav>

          {/* RIGHT: Sign In Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link to="/auth" style={{ textDecoration: 'none' }}>
              <button style={{
                position: 'relative',
                padding: '0.625rem 1.75rem',
                fontSize: '0.875rem',
                fontWeight: '600',
                fontFamily: 'Orbitron, sans-serif',
                letterSpacing: '0.1em',
                color: '#00FFFF',
                background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1) 0%, rgba(176, 38, 255, 0.1) 100%)',
                border: '2px solid rgba(0, 255, 255, 0.3)',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00FFFF'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.4)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 255, 255, 0.3)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
              >
                <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                SIGN IN
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
