export interface Download {
    id: number
    language: string
}

export function isDownload(input: unknown): input is Download {
    return typeof input === 'object' && input && 'id' in input ? true : false
}

export function isDownloadList(input: unknown): input is Download[] {
    return Array.isArray(input) && input.every((item) => isDownload(item))
}
