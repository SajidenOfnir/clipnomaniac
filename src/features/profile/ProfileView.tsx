import { Container } from '../../components/layout/Container'
import { Card } from '../../components/common/Card'

export default function ProfileView() {
  const stats = [
    { label: 'Chapters Completed', value: '3/12', color: 'text-neon-cyan' },
    { label: 'Choices Made', value: '28', color: 'text-neon-purple' },
    { label: 'Achievements', value: '7/50', color: 'text-neon-pink' },
    { label: 'Play Time', value: '4h 32m', color: 'text-neon-cyan' },
  ]

  const achievements = [
    { id: 1, name: 'First Steps', desc: 'Complete Chapter 1', unlocked: true },
    { id: 2, name: 'Brave Soul', desc: 'Make 10 risky choices', unlocked: true },
    { id: 3, name: 'Explorer', desc: 'Discover 5 secret paths', unlocked: false },
    { id: 4, name: 'Completionist', desc: 'Finish all chapters', unlocked: false },
  ]

  return (
    <div className="min-h-screen pt-24 pb-12 bg-dark-bg">
      <Container>
        {/* Profile Header */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-4">
            <div className="w-32 h-32 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full 
                          flex items-center justify-center text-6xl shadow-lg shadow-neon-cyan/50">
              👤
            </div>
          </div>
          <h1 className="text-4xl font-cyber text-white glow-text mb-2">
            COMMANDER
          </h1>
          <p className="text-gray-400">Space Explorer • Level 12</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="relative bg-dark-surface/80 backdrop-blur-lg rounded-xl border border-neon-cyan/30 p-6 text-center
                       hover:border-neon-cyan hover:shadow-lg hover:shadow-neon-cyan/20 transition-all"
            >
              <div className={`text-3xl font-cyber ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-2xl font-cyber text-neon-cyan mb-6">
            ACHIEVEMENTS
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`relative bg-dark-surface/80 backdrop-blur-lg rounded-xl border p-6 transition-all
                  ${achievement.unlocked 
                    ? 'border-neon-cyan shadow-lg shadow-neon-cyan/20' 
                    : 'border-gray-700 opacity-50'
                  }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl
                    ${achievement.unlocked 
                      ? 'bg-gradient-to-br from-neon-cyan to-neon-purple' 
                      : 'bg-gray-800'
                    }`}>
                    {achievement.unlocked ? '🏆' : '🔒'}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-cyber text-white mb-1">
                      {achievement.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {achievement.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}