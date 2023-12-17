export interface Review {
    author: string
    comments: string
    publication: string
    url: string
}

export function isReview(input: unknown): input is Review {
    return typeof input === 'object' && input && 'comments' in input
        ? true
        : false
}

export function isReviewList(input: unknown): input is Review[] {
    return Array.isArray(input) && input.every((item) => isReview(item))
}
