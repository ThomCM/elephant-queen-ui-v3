import type { Download } from './Download'
import type { VideoCollection } from './VideoCollection'

export interface LearningUnit {
    downloads: Download[]
    image: string
    name: string
    slug: string
    video_collection?: VideoCollection | null
}

export function isLearningUnit(input: unknown): input is LearningUnit {
    return typeof input === 'object' && input && 'downloads' in input
        ? true
        : false
}

export function isLearningUnitList(input: unknown): input is LearningUnit[] {
    return Array.isArray(input) && input.every((item) => isLearningUnit(item))
}
