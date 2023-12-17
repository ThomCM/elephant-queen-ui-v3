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
