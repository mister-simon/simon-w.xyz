<script setup>
const { content } = defineProps(['content']);
</script>

<template>
    <NuxtLink :to="content._path"
        class="no-underline group flex gap-4 before:content-['<'] before:grid before:place-content-center after:content-['/>'] after:grid after:place-content-center hover:text-teal-500 focus:text-teal-500 transition-colors duration-500">
        <div class="motion-safe:group-hover:rotate-1 motion-safe:group-focus:rotate-1 transition-transform duration-500">
            <div class="flex flex-wrap gap-4 justify-between mt-8">
                <h2
                    class="!my-0 group-hover:text-teal-400 group-focus:text-teal-400 motion-safe:group-hover:-rotate-1 motion-safe:group-focus:-rotate-1 transition duration-500 flex-1 origin-right">
                    <span
                        class="grayscale-[80%] inline-block scale-75 group-hover:grayscale-0 group-focus:grayscale-0 motion-safe:group-hover:scale-100 motion-safe:group-focus:scale-100 transition duration-500">{{
                            content.navigation?.icon ?? '>' }}</span>
                    <span class="group-hover:underline group-focus:underline underline-offset-4">{{ content.title }}</span>
                </h2>
                <p v-if="content.date" class="text-sm !mt-auto rotate-2">
                    <time datetime="{{ content.date }}">{{ content.date }}</time>
                </p>
            </div>
            <ContentRenderer :value="content" :excerpt="true" v-if="content.excerpt" class="text-pretty text-teal-100" />
            <p v-else-if="content.description" class="text-pretty text-teal-100">{{ content.description }}
            </p>
        </div>
    </NuxtLink>
</template>
