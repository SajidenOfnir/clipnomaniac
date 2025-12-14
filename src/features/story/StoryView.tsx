import { useState } from 'react'
import { ScenePlayer } from '../../components/story/ScenePlayer'
import { ChoicePanel } from '../../components/story/ChoicePanel'
import { ProgressBar } from '../../components/story/ProgressBar'
import { Button } from '../../components/common/Button'

export default function StoryView() {
  const [started, setStarted] = useState(false)
  const [currentScene, setCurrentScene] = useState(1)

  // Demo data
  const demoChoices = [
    {
      id: '1',
      text: 'Investigate the mysterious signal',
      consequence: 'High risk, potential discovery'
    },
    {
      id: '2',
      text: 'Return to the safety of the station',
      consequence: 'Safe choice, mission continues'
    }
  ]

  const handleChoice = (choiceId: string) => {
    console.log('Selected choice:', choiceId)
    setCurrentScene(prev => prev + 1)
  }

  if (!started) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-bg relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
          <div className="absolute w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" 
               style={{ animationDelay: '1s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="mb-8 inline-block">
            <div className="w-24 h-24 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-2xl 
                          flex items-center justify-center animate-pulse shadow-lg shadow-neon-cyan/50">
              <span className="text-6xl">🎬</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-cyber text-white mb-6 glow-text">
            THE VOID
            <span className="block text-3xl md:text-4xl text-neon-cyan mt-2">PROTOCOL</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            In the year 2247, you're the last hope for humanity. 
            Every choice shapes the destiny of millions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              onClick={() => setStarted(true)}
              className="text-lg px-10 py-4"
            >
              BEGIN JOURNEY
            </Button>
            <Button variant="ghost" className="text-lg px-10 py-4">
              LOAD PROGRESS
            </Button>
          </div>

          {/* Decorative elements */}
          <div className="mt-16 flex justify-center gap-8 text-gray-500">
            <div className="text-center">
              <div className="text-2xl font-cyber text-neon-cyan">12</div>
              <div className="text-xs">CHAPTERS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-cyber text-neon-cyan">47</div>
              <div className="text-xs">CHOICES</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-cyber text-neon-cyan">∞</div>
              <div className="text-xs">POSSIBILITIES</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <ProgressBar current={currentScene} total={10} chapter="CHAPTER 1: AWAKENING" />
      
      <ScenePlayer
        title="The Signal"
        description="Deep space Station Omega-7 receives an unknown transmission from the void. Your crew looks to you for guidance."
      />
      
      <ChoicePanel choices={demoChoices} onSelect={handleChoice} />
    </div>
  )
}