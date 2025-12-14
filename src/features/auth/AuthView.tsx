import { useState } from 'react'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/layout/Container'

export default function AuthView() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen pt-24 pb-12 bg-dark-bg flex items-center">
      <Container>
        <div className="max-w-md mx-auto">
          <div className="bg-dark-surface/80 backdrop-blur-lg rounded-2xl border border-neon-cyan/30 p-8 shadow-xl">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-cyber text-white glow-text mb-2">
                {isLogin ? 'SIGN IN' : 'SIGN UP'}
              </h2>
              <p className="text-gray-400">
                {isLogin ? 'Continue your journey' : 'Begin your adventure'}
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-cyber text-neon-cyan mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-dark-bg border border-neon-cyan/30 rounded-lg 
                             text-white focus:border-neon-cyan focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-cyber text-neon-cyan mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-dark-bg border border-neon-cyan/30 rounded-lg 
                           text-white focus:border-neon-cyan focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-cyber text-neon-cyan mb-2">
                  PASSWORD
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-dark-bg border border-neon-cyan/30 rounded-lg 
                           text-white focus:border-neon-cyan focus:outline-none transition-colors"
                  placeholder="••••••••"
                />
              </div>

              <Button variant="primary" className="w-full mt-6">
                {isLogin ? 'SIGN IN' : 'CREATE ACCOUNT'}
              </Button>
            </form>

            {/* Toggle */}
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-gray-400 hover:text-neon-cyan transition-colors"
              >
                {isLogin 
                  ? "Don't have an account? Sign up" 
                  : 'Already have an account? Sign in'
                }
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
