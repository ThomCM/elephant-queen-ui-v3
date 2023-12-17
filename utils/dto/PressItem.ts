export interface PressItem {
    publication_name: string
    title: string
    url: string
}

export function isPressItem(input: unknown): input is PressItem {
    return typeof input === 'object' && input && 'title' in input ? true : false
}

export function isPressItemList(input: unknown): input is PressItem[] {
    return Array.isArray(input) && input.every((item) => isPressItem(item))
}
