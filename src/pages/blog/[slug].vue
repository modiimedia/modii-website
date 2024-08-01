<script setup lang="ts"></script>

<template>
    <ContentDoc v-slot="{ doc }">
        <article class="container max-w-2xl">
            <h1
                class="text-5xl font-bold text-gray-900 dark:text-white mb-10 mt-20"
            >
                {{ doc.title }}
            </h1>
            <ContentRenderer class="content" :value="doc" />
        </article>
    </ContentDoc>
</template>
