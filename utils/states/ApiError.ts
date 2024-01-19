import { type InjectionKey, type Ref, ref } from 'vue'
import type ApiError from '@/utils/dto/ApiError'

// Define the injection key
export const apiErrorStateKey: InjectionKey<Ref<ApiError | undefined>> =
    Symbol()

export const apiErrorState: Ref<ApiError | undefined> = ref()
