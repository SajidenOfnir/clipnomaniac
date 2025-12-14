import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Loader } from './components/common/Loader'
import { Header } from './components/layout/Header'

const BrowseView = lazy(() => import('./features/browse/BrowseView'))
const StoryView = lazy(() => import('./features/story/StoryView'))
const ProfileView = lazy(() => import('./features/profile/ProfileView'))
const AuthView = lazy(() => import('./features/auth/AuthView'))

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen" style={{ backgroundColor: '#0B0F29' }}>
        {/* Header should be HERE - visible on all pages */}
        <Header />
        
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Navigate to="/browse" replace />} />
            <Route path="/browse" element={<BrowseView />} />
            <Route path="/story" element={<StoryView />} />
            <Route path="/profile" element={<ProfileView />} />
            <Route path="/auth" element={<AuthView />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App