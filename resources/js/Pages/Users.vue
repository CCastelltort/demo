<template>
    <h1>Users</h1>

    <div style="margin-top: 800px;">
        <p>The current time is {{ time }}.</p>
    </div>


    <Link href="/users" class="text-blue-500" preserve-scroll>
        Refresh
    </Link>

</template>

<script setup>
import { Link } from '@inertiajs/vue3'

defineProps({
    time: String
});

</script>

<style scoped>

</style>