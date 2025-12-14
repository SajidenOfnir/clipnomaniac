import { Client, Account, Databases, Storage } from 'appwrite'

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://fra.cloud.appwrite.io/v1')
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID || '')

export const account = new Account(client)
export const databases = new Databases(client)
export const storage = new Storage(client)

export const appwriteConfig = {
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID || '',
  collections: {
    users: 'users',
    progress: 'progress',
    choices: 'choices',
    achievements: 'achievements',
  },
  bucketId: import.meta.env.VITE_APPWRITE_TABLE_ID || '',
}

export default client