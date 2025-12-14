export interface User {
  id: string
  name: string
  email: string
  createdAt: string
}

export interface UserProfile extends User {
  level: number
  achievements: string[]
  progress: StoryProgress
}