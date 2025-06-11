<template>
    <Layout>
        <h1 class="text-3xl">Users</h1>

        <div style="margin-top: 800px;">
        <p>The current time is {{ time }}.</p>
    </div>


    <Link href="/users" class="text-blue-500" preserve-scroll>
        Refresh
    </Link>
    </Layout>

    

</template>

<script setup>
import Layout from "../Shared/Layout.vue";
import { Link } from '@inertiajs/vue3'

defineProps({
    time: String
});

</script>

<style scoped>

</style>