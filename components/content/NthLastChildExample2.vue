<script setup>
const count = ref(5);
</script>
<template>
    <div class="flex">
        <div class="grid gap-4 content-start">
            <button @click="count > 1 ? count-- : null" class="block border rounded-md p-4">- Item</button>
            <button @click="count < 10 ? count++ : null" class="block border rounded-md p-4">+ Item</button>
        </div>
        <ul class="!my-0">
            <li v-for="i in count" class="[&:nth-last-child(n+5)~li]:border px-4">
                Reverse index: {{ count - (i - 1) }}
            </li>
        </ul>
    </div>
</template>