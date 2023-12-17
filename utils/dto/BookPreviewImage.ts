export interface BookPreviewImage {
    position: number
    url: string
}

export function isBookPreviewImage(input: unknown): input is BookPreviewImage {
    return typeof input === 'object' && input && 'url' in input ? true : false
}

export function isBookPreviewImageList(
    input: unknown
): input is BookPreviewImage[] {
    return (
        Array.isArray(input) && input.every((item) => isBookPreviewImage(item))
    )
}
