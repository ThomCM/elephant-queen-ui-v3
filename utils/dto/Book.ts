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

export function isBook(input: unknown): input is Book {
    return typeof input === 'object' && input && 'downloads' in input
        ? true
        : false
}

export function isBookList(input: unknown): input is Book[] {
    return Array.isArray(input) && input.every((item) => isBook(item))
}
