import type { Audio } from './Audio'
import type { Download } from './Download'

export interface AudioCollection {
    audios: Audio[]
    book_reading_level: string
    book_type: string
    downloads: Download[]
    image: string
    name: string
    slug: string
}

export function isAudioCollection(input: unknown): input is AudioCollection {
    return typeof input === 'object' && input && 'downloads' in input
        ? true
        : false
}

export function isAudioCollectionList(
    input: unknown
): input is AudioCollection[] {
    return (
        Array.isArray(input) && input.every((item) => isAudioCollection(item))
    )
}
