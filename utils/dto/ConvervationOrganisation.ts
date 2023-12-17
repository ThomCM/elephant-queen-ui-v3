export interface ConservationOrganisation {
    image: string
    name: string
    url: string
}

export function isConservationOrganisation(
    input: unknown
): input is ConservationOrganisation {
    return typeof input === 'object' && input && 'name' in input ? true : false
}

export function isConservationOrganisationList(
    input: unknown
): input is ConservationOrganisation[] {
    return (
        Array.isArray(input) &&
        input.every((item) => isConservationOrganisation(item))
    )
}
