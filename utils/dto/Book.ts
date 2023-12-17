import type { Download } from './Download'
import type { BookPreviewImage } from './BookPreviewImage'

export interface Book {
    collection: {
        name: string
        slug: string
    }
    downloads: Download[]
    image: string
    preview_images: BookPreviewImage[]
    slug: string
    title: string
}
