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
