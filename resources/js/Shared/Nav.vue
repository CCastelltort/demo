<template>
    <div>
        <nav>
        <ul class="flex space-x-6 ">
            <li>
                <NavLink href="/" :active="$page.component === 'Home'">
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink href="/users" :active="$page.component === 'Users'">
                    Users
                </NavLink>
            </li>

            <li>
                <NavLink href="/settings" :active="$page.component === 'Settings'">
                    Settings
                </NavLink>
            </li>

            <li><Link href="/logout" method="post" as="button" class="text-blue-500 hover:underline">Log Out</Link></li>

            
        </ul>
    </nav>

    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
import NavLink from "./NavLink.vue";


</script>

<style lang="scss" scoped>

</style>