export default interface ApiError {
    response?: {
        statusText?: string
        status?: number
        data?: {
            errors: Record<string, string[]>
            message: string
        }
        errors?: Record<string, string[]>
    }
}
