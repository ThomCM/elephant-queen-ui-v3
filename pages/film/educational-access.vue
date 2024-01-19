<template>
    <div class="py-6 xl:py-12">
        <div class="mb-6 text-left md:text-center xl:mb-12">
            <h2>
                The film is available online free of charge for non-commercial
                Education and Conservation screenings in East Africa. Please
                complete the form below.
            </h2>
        </div>

        <div class="md:max-w-lg md:mx-auto">
            <form @submit.prevent="onSubmit" class="grid grid-cols-1 gap-y-6">
                <FormField label="Organisation Name">
                    <input
                        type="text"
                        required
                        v-model="form.organisation_name"
                    />
                </FormField>

                <FormField label="Organisation Address">
                    <input
                        type="text"
                        required
                        v-model="form.organisation_address"
                    />
                </FormField>

                <FormField label="Organisation Phone Number">
                    <input
                        type="tel"
                        required
                        v-model="form.organisation_phone"
                    />
                </FormField>

                <FormField label="Organisation Email">
                    <input
                        type="email"
                        required
                        v-model="form.organisation_email"
                    />
                </FormField>

                <FormField label="Contact Name">
                    <input type="text" required v-model="form.contact_name" />
                </FormField>

                <FormField label="Contact Email">
                    <input type="email" required v-model="form.contact_email" />
                </FormField>

                <FormField label="Contact Email (Confirm)">
                    <input
                        type="email"
                        required
                        v-model="form.contact_email_confirm"
                    />
                </FormField>

                <FormField label="Contact Role">
                    <input type="text" required v-model="form.contact_role" />
                </FormField>

                <FormField label="Contact Phone">
                    <input type="tel" required v-model="form.contact_phone" />
                </FormField>

                <FormField
                    label="Screening Purpose"
                    tip="Only non-commercial education and conservation"
                >
                    <input
                        type="text"
                        required
                        v-model="form.screening_purpose"
                    />
                </FormField>

                <FormField label="Screening Location">
                    <input
                        type="text"
                        required
                        v-model="form.screening_location"
                    />
                </FormField>

                <FormField v-if="minScreeningDate" label="Screening Date">
                    <input
                        type="date"
                        required
                        :min="minScreeningDate"
                        v-model="form.screening_date"
                    />
                </FormField>

                <FormField label="Screening Audience Age Range">
                    <input
                        type="text"
                        required
                        v-model="form.screening_audience_age_range"
                    />
                </FormField>

                <FormField label="Screening Audience Size">
                    <input
                        type="number"
                        required
                        v-model="form.screening_audience_size"
                    />
                </FormField>

                <FormField label="Screening Language">
                    <select required v-model="form.screening_language">
                        <option value="English">English</option>
                        <option value="Kiswahili">Kiswahili</option>
                        <option value="Maa">Maa</option>
                    </select>
                </FormField>

                <FormField
                    label="Film Link Recipient Email"
                    tip="This must be the same individual as named above and who signs this form below"
                >
                    <input
                        type="email"
                        required
                        v-model="form.film_link_recipient_email"
                    />
                </FormField>

                <p>
                    All rights to the film and associated materials are reserved
                    by Wild Inspiration Ltd. and it’s licensor. The film, The
                    Elephant Queen may only be screened for non-commercial
                    education and conservation purposes.
                </p>

                <FormField>
                    <div
                        class="flex items-center cursor-pointer"
                        @click="
                            form.download_prohibition_acceptance =
                                !form.download_prohibition_acceptance
                        "
                    >
                        <div
                            :class="[
                                'border-2 border-black h-8 w-8 flex-shrink-0 flex items-center justify-center mr-6',
                            ]"
                        >
                            <XMarkIcon
                                v-show="form.download_prohibition_acceptance"
                                class="h-6 w-6"
                            />
                        </div>

                        <p>
                            I will not download the The Elephant Queen film or
                            use it for any purpose other than for the screening
                            as defined above in this application form.
                        </p>
                    </div>
                </FormField>

                <FormField>
                    <div
                        class="flex items-center cursor-pointer"
                        @click="
                            form.liability_understood_acceptance =
                                !form.liability_understood_acceptance
                        "
                    >
                        <div
                            :class="[
                                'border-2 border-black h-8 w-8 flex-shrink-0 flex items-center justify-center mr-6',
                            ]"
                        >
                            <XMarkIcon
                                v-show="form.liability_understood_acceptance"
                                class="h-6 w-6"
                            />
                        </div>

                        <p>
                            I understand that I can be held liable for any use
                            or screening of the The Elephant Queen film other
                            than as defined here for non-commercial education or
                            conservation purposes.
                        </p>
                    </div>
                </FormField>

                <div>
                    <Button native-type="submit" :processing="sending">
                        {{
                            !sending ? 'Click to Agree and Apply' : 'Sending...'
                        }}
                    </Button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline'
import type ApiError from '@/utils/dto/ApiError'
import { apiErrorStateKey } from '@/utils/states/ApiError'

useHead({
    title: 'The Elephant Queen: Educational Access',
    meta: [
        {
            name: 'description',
            content: 'Submit your request for educational access here.',
        },
    ],
})

const runtimeConfig = useRuntimeConfig()

const sending = ref(false)
const form = reactive<{
    organisation_name: string | null
    organisation_address: string | null
    organisation_phone: string | null
    organisation_email: string | null
    contact_name: string | null
    contact_email: string | null
    contact_email_confirm: string | null
    contact_role: string | null
    contact_phone: string | null
    screening_purpose: string | null
    screening_location: string | null
    screening_date: string | null
    screening_audience_age_range: string | null
    screening_audience_size: string | null
    screening_language: string | null
    film_link_recipient_email: string | null
    download_prohibition_acceptance: boolean
    liability_understood_acceptance: boolean
}>({
    organisation_name: null,
    organisation_address: null,
    organisation_phone: null,
    organisation_email: null,
    contact_name: null,
    contact_email: null,
    contact_email_confirm: null,
    contact_role: null,
    contact_phone: null,
    screening_purpose: null,
    screening_location: null,
    screening_date: null,
    screening_audience_age_range: null,
    screening_audience_size: null,
    screening_language: null,
    film_link_recipient_email: null,
    download_prohibition_acceptance: false,
    liability_understood_acceptance: false,
})
const minScreeningDate = ref<string | null>(null)

onMounted(() => {
    let newMinScreeningDate = new Date()
    newMinScreeningDate.setDate(newMinScreeningDate.getDate() + 7)
    minScreeningDate.value = newMinScreeningDate.toISOString().split('T')[0]
})

const errors = ref<ApiError>()
provide(apiErrorStateKey, errors)

async function onSubmit() {
    sending.value = true

    const response = await $fetch(
        `${runtimeConfig.public.productionApiUrl}/educational-access-application`,
        {
            method: 'POST',
            body: form,
        }
    ).catch(onFail)

    sending.value = false

    if (response) {
        alert(
            'Success, your request has been submitted. We will get back to you as soon as possible.'
        )

        resetForm()
    }
}

function onFail(err: ApiError) {
    errors.value = err

    alert('There were errors with your submission. Please check the form.')
}

function resetForm() {
    form.organisation_name = null
    form.organisation_address = null
    form.organisation_phone = null
    form.organisation_email = null
    form.contact_name = null
    form.contact_email = null
    form.contact_email_confirm = null
    form.contact_role = null
    form.contact_phone = null
    form.screening_purpose = null
    form.screening_location = null
    form.screening_date = null
    form.screening_audience_age_range = null
    form.screening_audience_size = null
    form.screening_language = null
    form.film_link_recipient_email = null
    form.download_prohibition_acceptance = false
    form.liability_understood_acceptance = false
}
</script>

<style></style>
