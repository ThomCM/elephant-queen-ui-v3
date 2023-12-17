export interface PhotoDiaryEntry {
    photo: string
    position: number
    title: string
}

export function isPhotoDiaryEntry(input: unknown): input is PhotoDiaryEntry {
    return typeof input === 'object' && input && 'title' in input ? true : false
}

export function isPhotoDiaryEntryList(
    input: unknown
): input is PhotoDiaryEntry[] {
    return (
        Array.isArray(input) && input.every((item) => isPhotoDiaryEntry(item))
    )
}
