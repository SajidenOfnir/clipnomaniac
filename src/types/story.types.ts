export interface Scene {
  id: string
  chapterId: string
  title: string
  description: string
  videoUrl?: string
  audioUrl?: string
  choices: Choice[]
}

export interface Choice {
  id: string
  text: string
  consequence: string
  nextSceneId: string
}

export interface StoryProgress {
  sceneId: string
  chapterId: string
  completionPercentage: number
  timestamp?: string
}

export interface UserChoice {
  sceneId: string
  choiceId: string
  timestamp?: string
}