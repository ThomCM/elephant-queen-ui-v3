export interface Partner {
    image: string
    name: string
    url: string
}

export function isPartner(input: unknown): input is Partner {
    return typeof input === 'object' && input && 'name' in input ? true : false
}

export function isPartnerList(input: unknown): input is Partner[] {
    return Array.isArray(input) && input.every((item) => isPartner(item))
}
