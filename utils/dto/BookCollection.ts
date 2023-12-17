import type { Book } from './Book'
import type { Download } from './Download'

export interface BookCollection {
    books: Book[]
    book_reading_level: string
    book_type: string
    downloads: Download[]
    image: string
    name: string
    slug: string
}

export function isBookCollection(input: unknown): input is BookCollection {
    return typeof input === 'object' && input && 'books' in input ? true : false
}

export function isBookCollectionList(
    input: unknown
): input is BookCollection[] {
    return Array.isArray(input) && input.every((item) => isBookCollection(item))
}
