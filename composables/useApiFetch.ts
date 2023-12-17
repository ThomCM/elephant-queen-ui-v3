export const useApiFetch = async <T = any>(
    endpoint: string,
    queryParams: Record<string, any> = {},
    options?: any
): Promise<any> => {
    const runtimeConfig = useRuntimeConfig()

    const baseUrl = runtimeConfig.public.devApiUrl

    const url = endpoint.startsWith('/')
        ? baseUrl + endpoint
        : `${baseUrl}/${endpoint}`

    return await useFetch<T>(url, {
        query: queryParams,
        ...options,
    })
}
