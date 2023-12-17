export interface TeamMember {
    first_name: string
    full_name: string
    id: number
    image: string
    last_name: string
    role: string
}

export function isTeamMember(input: unknown): input is TeamMember {
    return typeof input === 'object' && input && 'full_name' in input
        ? true
        : false
}

export function isTeamMemberList(input: unknown): input is TeamMember[] {
    return Array.isArray(input) && input.every((item) => isTeamMember(item))
}
