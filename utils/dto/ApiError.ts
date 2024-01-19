export default interface ApiError {
    response?: {
        statusText?: string
        status?: number
        _data?: Record<string, string[]>
    }
}
