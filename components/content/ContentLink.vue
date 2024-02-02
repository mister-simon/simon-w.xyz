<script setup>
const { to } = defineProps(['to']);
const toLink = `/thoughts-and-things/${to}`;
</script>
<template>
    <NuxtLink :to="toLink" v-bind="$props">
        <ContentSlot unwrap="p" />
    </NuxtLink>
</template>