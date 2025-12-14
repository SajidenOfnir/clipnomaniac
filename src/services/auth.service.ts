// services/auth.service.ts
import { account } from './appwrite'
import { ID } from 'appwrite'

export const authService = {
  async createAccount(email: string, password: string, name: string) {
    try {
      const user = await account.create(ID.unique(), email, password, name)
      await this.createSession(email, password)
      return user
    } catch (error) {
      throw new Error(`Account creation failed: ${error}`)
    }
  },

  async createSession(email: string, password: string) {
    try {
      return await account.createEmailPasswordSession(email, password)
    } catch (error) {
      throw new Error(`Login failed: ${error}`)
    }
  },

  async getCurrentUser() {
    try {
      return await account.get()
    } catch (error) {
      return null
    }
  },

  async logout() {
    try {
      await account.deleteSession('current')
    } catch (error) {
      throw new Error(`Logout failed: ${error}`)
    }
  },

  async updatePreferences(preferences: Record<string, any>) {
    try {
      return await account.updatePrefs(preferences)
    } catch (error) {
      throw new Error(`Failed to update preferences: ${error}`)
    }
  },
}