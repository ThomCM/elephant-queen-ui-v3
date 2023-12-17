import type { Download } from './Download'
import type { VideoCollection } from './VideoCollection'

export interface LearningUnit {
    downloads: Download[]
    image: string
    name: string
    slug: string
    video_collection: VideoCollection
}
