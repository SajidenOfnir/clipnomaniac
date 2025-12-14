// hooks/useRealtimeProgress.ts
import { useEffect, useState } from 'react'
import client from '@/services/appwrite'
import { appwriteConfig } from '@/services/appwrite'

export const useRealtimeProgress = (userId: string) => {
  const [progress, setProgress] = useState(null)

  useEffect(() => {
    const unsubscribe = client.subscribe(
      `databases.${appwriteConfig.databaseId}.collections.${appwriteConfig.collections.progress}.documents`,
      (response) => {
        if (response.payload.userId === userId) {
          setProgress(response.payload)
        }
      }
    )

    return () => {
      unsubscribe()
    }
  }, [userId])

  return progress
}