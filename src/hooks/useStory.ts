// hooks/useStory.ts
import { useEffect, useState } from 'react'
import { useStoryStore } from '@/store/storyStore'
import { databaseService } from '@/services/database.service'
import { Scene, Choice } from '@/types/story.types'

export const useStory = (userId: string) => {
  const [loading, setLoading] = useState(true)
  const { 
    currentScene, 
    setCurrentScene, 
    addToHistory, 
    recordChoice,
    updateProgress 
  } = useStoryStore()

  // Load saved progress on mount
  useEffect(() => {
    const loadProgress = async () => {
      try {
        const savedProgress = await databaseService.getProgress(userId)
        if (savedProgress) {
          // Resume from saved scene
          const scene = await fetchSceneById(savedProgress.sceneId)
          setCurrentScene(scene)
          updateProgress(savedProgress)
        }
      } catch (error) {
        console.error('Failed to load progress:', error)
      } finally {
        setLoading(false)
      }
    }
    
    loadProgress()
  }, [userId])

  const makeChoice = async (choice: Choice) => {
    if (!currentScene) return

    try {
      // Record choice in state
      recordChoice(currentScene.id, choice)
      addToHistory(currentScene.id)
      
      // Save to backend
      await databaseService.saveChoice(userId, {
        sceneId: currentScene.id,
        choiceId: choice.id,
      })
      
      // Load next scene
      const nextScene = await fetchSceneById(choice.nextSceneId)
      setCurrentScene(nextScene)
      
      // Update progress
      await databaseService.saveProgress(userId, {
        sceneId: nextScene.id,
        chapterId: nextScene.chapterId,
        completionPercentage: calculateProgress(),
      })
    } catch (error) {
      console.error('Failed to process choice:', error)
    }
  }

  const calculateProgress = (): number => {
    // Calculate based on scenes visited
    return (useStoryStore.getState().sceneHistory.length / totalScenes) * 100
  }

  return {
    currentScene,
    loading,
    makeChoice,
  }
}