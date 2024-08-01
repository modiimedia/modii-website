<script setup lang="ts">
import { format } from '@formkit/tempo';

function formattedDate(input: Date) {
    return format({ date: input, format: 'long' });
}
</script>

<template>
    <div>
        <nav class="px-4 py-10">
            <div class="container max-w-2xl">
                <a
                    href="/"
                    class="hover:underline underline-offset-4 underline-2 decoration-primary-500"
                >
                    <div class="">back to <strong>MODII</strong></div>
                </a>
            </div>
        </nav>
        <ContentDoc v-slot="{ doc }">
            <main class="container max-w-2xl">
                <div class="mb-20 mt-20">
                    <h1
                        class="text-5xl font-bold text-gray-900 dark:text-white mb-2"
                    >
                        {{ doc.title }}
                    </h1>
                    <div class="text-2xl">{{ doc.subtitle }}</div>
                    <div class="pt-4 text-gray-700 dark:text-gray-300">
                        publish on {{ formattedDate(doc.publishDate) }}
                    </div>
                    <div class="pt-1 dark:text-gray-300 text-gray-700">
                        by
                        <strong class="text-gray-900 dark:text-white">
                            {{ doc.author }}
                        </strong>
                    </div>
                </div>
                <ContentRenderer class="content" :value="doc" />
            </main>
        </ContentDoc>
    </div>
</template>
