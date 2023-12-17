import type { Download } from './Download'
import type { Video } from './Video'

export interface VideoCollection {
    videos: Video[]
    downloads: Download[]
    image: string
    name: string
    slug: string
}

export function isVideoCollection(input: unknown): input is VideoCollection {
    return typeof input === 'object' && input && 'videos' in input
        ? true
        : false
}

export function isVideoCollectionList(
    input: unknown
): input is VideoCollection[] {
    return (
        Array.isArray(input) && input.every((item) => isVideoCollection(item))
    )
}
