import type { Download } from './Download'
import type { Video } from './Video'

export interface VideoCollection {
    videos: Video[]
    downloads: Download[]
    image: string
    name: string
    slug: string
}
