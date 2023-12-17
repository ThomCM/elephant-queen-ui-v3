<template>
    <Modal @close="$emit('close')">
        <div class="text-center">
            <div class="mb-6">
                <h2>Download</h2>
            </div>

            <div class="mb-6">
                <Checkbox v-model="disclaimerChecked">
                    *All rights are reserved for Outreach & Education Ltd and/or
                    its affiliate companies. Any use or download of the
                    materials from this website may be made for non-commercial
                    educational purposes only. Unless otherwise expressly
                    permitted by O&E Ltd and documented in a written agreement,
                    I will not use the material for any other purposes. I
                    confirm that any performance of this play will acknowledge
                    that it was created by The Elephant Queen Outreach
                    <span class="text-link">www.elephant.co.ke</span> and
                    written by Lizzie Jago in the introduction at a live
                    performance and in any publicity, advertising or interviews.
                </Checkbox>
            </div>

            <div class="mb-6">
                If you wish to use the scripts for any other purposes than
                non-commercial educational purposes (i.e public, commercial
                performance) please contact
                <a
                    class="text-link"
                    href="mailto:operations@theelephantqueenoutreach.co.ke"
                    >operations@theelephantqueenoutreach.co.ke</a
                >
            </div>

            <div v-if="download">
                <a
                    :class="[{ disabled: !disclaimerChecked }]"
                    download
                    :href="download"
                    target="_blank"
                >
                    <Button class="w-full"> Download </Button>
                </a>
            </div>
        </div>
    </Modal>
</template>

<script setup lang="ts">
defineProps<{ download: string }>()

const disclaimerChecked = ref(false)
</script>

<style scoped>
a.disabled {
    pointer-events: none;
    cursor: default;
}
</style>
