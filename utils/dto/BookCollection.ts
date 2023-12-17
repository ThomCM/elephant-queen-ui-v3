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
