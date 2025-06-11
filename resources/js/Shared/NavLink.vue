<template>
    <div>
        <Link 
            :href="href"
            class="text-blue-500 hover:underline"
            :class="{'font-bold underline': active}"
        >
            <slot></slot>
        </Link>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'

defineProps({
    active: Boolean,
    href: String,
})

</script>

<style scoped>

</style>