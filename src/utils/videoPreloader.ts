// utils/videoPreloader.ts
export class VideoPreloader {
  private cache = new Map<string, HTMLVideoElement>()

  preload(urls: string[]) {
    urls.forEach((url) => {
      if (!this.cache.has(url)) {
        const video = document.createElement('video')
        video.src = url
        video.preload = 'auto'
        this.cache.set(url, video)
      }
    })
  }

  getVideo(url: string): HTMLVideoElement | undefined {
    return this.cache.get(url)
  }

  clear() {
    this.cache.clear()
  }
}

export const videoPreloader = new VideoPreloader()