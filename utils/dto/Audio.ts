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
