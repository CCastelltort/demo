<template>
    <h1>Hello {{name}}</h1>

    <p>We will use the following frameworks:</p>
    <ul>
        <li v-for="framework in frameworks" v-text="framework"></li>
    </ul>  
</template>

<script setup>
defineProps({
    name: String,
    frameworks: Array,
});


</script>

<style lang="scss" scoped>

</style>