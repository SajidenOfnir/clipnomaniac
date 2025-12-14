// store/storyStore.ts
import { create } from 'zustand'
import { Scene, Choice, StoryProgress } from '@/types/story.types'

interface StoryState {
  currentScene: Scene | null
  sceneHistory: string[]
  choices: Record<string, Choice>
  progress: StoryProgress | null
  
  setCurrentScene: (scene: Scene) => void
  addToHistory: (sceneId: string) => void
  recordChoice: (sceneId: string, choice: Choice) => void
  updateProgress: (progress: StoryProgress) => void
  resetStory: () => void
}

export const useStoryStore = create<StoryState>((set) => ({
  currentScene: null,
  sceneHistory: [],
  choices: {},
  progress: null,

  setCurrentScene: (scene) => set({ currentScene: scene }),
  
  addToHistory: (sceneId) =>
    set((state) => ({
      sceneHistory: [...state.sceneHistory, sceneId],
    })),
  
  recordChoice: (sceneId, choice) =>
    set((state) => ({
      choices: { ...state.choices, [sceneId]: choice },
    })),
  
  updateProgress: (progress) => set({ progress }),
  
  resetStory: () =>
    set({
      currentScene: null,
      sceneHistory: [],
      choices: {},
      progress: null,
    }),
}))