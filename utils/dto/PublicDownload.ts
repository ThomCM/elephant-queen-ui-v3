export interface PublicDownload {
    language: string
    url: string
}

export function isPublicDownload(input: unknown): input is PublicDownload {
    return typeof input === 'object' && input && 'url' in input ? true : false
}

export function isPublicDownloadList(
    input: unknown
): input is PublicDownload[] {
    return Array.isArray(input) && input.every((item) => isPublicDownload(item))
}
