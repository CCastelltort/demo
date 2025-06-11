<template>
    <Head>
            <title>My App - Users</title>
    </Head>

        <h1 class="text-3xl">Users</h1>

        <div style="margin-top: 800px;">
        <p>The current time is {{ time }}.</p>
    </div>


    <Link href="/users" class="text-blue-500" preserve-scroll>
        Refresh
    </Link>
  

</template>

<script setup>
import { Link } from '@inertiajs/vue3'
import { Head } from '@inertiajs/vue3'


defineProps({
    time: String
});


</script>

<style scoped>

</style>