import { Button } from '../../components/common/Button'

interface Choice {
  id: string
  text: string
  consequence: string
}

interface ChoicePanelProps {
  choices: Choice[]
  onSelect: (choiceId: string) => void
}

export const ChoicePanel = ({ choices, onSelect }: ChoicePanelProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-dark-bg via-dark-bg to-transparent">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-neon-cyan font-cyber mb-4 text-sm tracking-widest">
          CHOOSE YOUR PATH
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {choices.map((choice, index) => (
            <button
              key={choice.id}
              onClick={() => onSelect(choice.id)}
              className="group relative p-6 bg-dark-surface/80 backdrop-blur-lg rounded-xl border border-neon-cyan/30 
                         transition-all duration-300 hover:border-neon-cyan hover:shadow-lg hover:shadow-neon-cyan/30 
                         hover:scale-[1.02] text-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 rounded-xl 
                            opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-cyber text-white mb-2 group-hover:text-neon-cyan transition-colors">
                  {choice.text}
                </h3>
                <p className="text-sm text-gray-400">
                  {choice.consequence}
                </p>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}