export interface Link {
    label: string
    to: string
}

export function isLink(input: unknown): input is Link {
    return typeof input === 'object' && input && 'to' in input ? true : false
}

export function isLinkList(input: unknown): input is Link[] {
    return Array.isArray(input) && input.every((item) => isLink(item))
}
