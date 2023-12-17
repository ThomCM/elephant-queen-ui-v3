export interface VideoDiaryEntry {
    image: string | null
    position: number
    title: string
    video: string
}

export function isVideoDiaryEntry(input: unknown): input is VideoDiaryEntry {
    return typeof input === 'object' && input && 'title' in input ? true : false
}

export function isVideoDiaryEntryList(
    input: unknown
): input is VideoDiaryEntry[] {
    return (
        Array.isArray(input) && input.every((item) => isVideoDiaryEntry(item))
    )
}
