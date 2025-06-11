<template>
    <div>
        <section class="p-6 bg-gray-200">
            <header class="flex justify-between">
                <div class="flex items-center">
                    <h1 class="font-bold text-lg">My App</h1>
                    
                    <p class="text-sm ml-4">
                        Welcome Back, {{ user.username }}!
                    </p>
                </div>
                
                <Nav></Nav>
            </header>
        </section>
        
        <section class="p-6">
            <div class="max-w-3xl mx-auto">
                <slot></slot>
            </div>
        </section>

    </div>
</template>

<script setup>
import Nav from "./Nav.vue";
import { usePage } from '@inertiajs/vue3'

const { props } = usePage()
const user = props.auth.user

</script>

<style scoped>

</style>