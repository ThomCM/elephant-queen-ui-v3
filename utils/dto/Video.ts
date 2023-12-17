import type { Download } from './Download'

export interface Video {
    collection: {
        name: string
        slug: string
    }
    downloads: Download[]
    image: string
    slug: string
    title: string
    youtube_id_english: string
    youtube_id_maa: string
    youtube_id_swahili: string
}

export function isVideo(input: unknown): input is Video {
    return typeof input === 'object' && input && 'downloads' in input
        ? true
        : false
}

export function isVideoList(input: unknown): input is Video[] {
    return Array.isArray(input) && input.every((item) => isVideo(item))
}
