// services/database.service.ts
import { databases, appwriteConfig } from './appwrite'
import { ID, Query } from 'appwrite'
import { StoryProgress, UserChoice } from '@/types/story.types'

export const databaseService = {
  // Save user progress
  async saveProgress(userId: string, progress: StoryProgress) {
    try {
      const document = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.collections.progress,
        ID.unique(),
        {
          userId,
          sceneId: progress.sceneId,
          chapterId: progress.chapterId,
          timestamp: new Date().toISOString(),
          completionPercentage: progress.completionPercentage,
        }
      )
      return document
    } catch (error) {
      throw new Error(`Failed to save progress: ${error}`)
    }
  },

  // Get user progress
  async getProgress(userId: string) {
    try {
      const response = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.collections.progress,
        [
          Query.equal('userId', userId),
          Query.orderDesc('timestamp'),
          Query.limit(1),
        ]
      )
      return response.documents[0] || null
    } catch (error) {
      throw new Error(`Failed to retrieve progress: ${error}`)
    }
  },

  // Save user choice
  async saveChoice(userId: string, choice: UserChoice) {
    try {
      return await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.collections.choices,
        ID.unique(),
        {
          userId,
          sceneId: choice.sceneId,
          choiceId: choice.choiceId,
          timestamp: new Date().toISOString(),
        }
      )
    } catch (error) {
      throw new Error(`Failed to save choice: ${error}`)
    }
  },

  // Get all user choices for a story
  async getUserChoices(userId: string) {
    try {
      const response = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.collections.choices,
        [Query.equal('userId', userId), Query.orderAsc('timestamp')]
      )
      return response.documents
    } catch (error) {
      throw new Error(`Failed to retrieve choices: ${error}`)
    }
  },

  // Update or create document (upsert pattern)
  async upsertProgress(userId: string, progress: StoryProgress) {
    try {
      const existing = await this.getProgress(userId)
      if (existing) {
        return await databases.updateDocument(
          appwriteConfig.databaseId,
          appwriteConfig.collections.progress,
          existing.$id,
          { ...progress, timestamp: new Date().toISOString() }
        )
      }
      return await this.saveProgress(userId, progress)
    } catch (error) {
      throw new Error(`Failed to upsert progress: ${error}`)
    }
  },
}