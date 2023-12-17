import type { PublicDownload } from './PublicDownload'

export interface Audio {
    collection: {
        name: string
        slug: string
    }
    downloads: PublicDownload[]
    image: string
    slug: string
    title: string
}

export function isAudio(input: unknown): input is Audio {
    return typeof input === 'object' && input && 'downloads' in input
        ? true
        : false
}

export function isAudioList(input: unknown): input is Audio[] {
    return Array.isArray(input) && input.every((item) => isAudio(item))
}
