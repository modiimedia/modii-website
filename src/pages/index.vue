<script setup lang="ts"></script>

<template>
    <div>
        <section class="lg:pt-20 pt-10 px-4">
            <div class="container max-w-5xl">
                <div class="mb-20">
                    <div class="font-bold text-3xl">MODII</div>
                    <div class="text-lg text-gray-600 dark:text-gray-300">
                        Technology and Media Solutions
                    </div>
                </div>
            </div>
        </section>
        <section class="px-4 py-40">
            <div class="container max-w-5xl">
                <div class="lg:text-5xl text-3xl font-bold">
                    <div class="mb-2">Mobile Development</div>
                    <div class="mb-2">Backend Development</div>
                    <div class="mb-2">Web Development</div>
                    <div class="mb-2">Project Management</div>
                    <div class="">DevOps</div>
                </div>
            </div>
        </section>

        <section class="px-4 py-20">
            <div class="container max-w-5xl">
                <h1 class="text-3xl font-bold mb-4">Contact Us</h1>
                <div class="lg:flex">
                    <form
                        name="contact"
                        data-netlify="true"
                        method="POST"
                        class="lg:w-3/4"
                    >
                        <div class="py-2">
                            <label for="name-input">Name</label>
                            <input
                                name="Name"
                                type="text"
                                class="w-full border-2 rounded border-gray-400 dark:border-gray-600 bg-transparent p-3"
                                required
                            />
                        </div>
                        <div class="py-2">
                            <label for="email-input">Email</label>
                            <input
                                type="email"
                                name="email"
                                class="w-full border-2 rounded border-gray-400 dark:border-gray-600 bg-transparent p-3"
                                required
                            />
                        </div>
                        <div class="py-2">
                            <label for="phone-input">Phone</label>
                            <input
                                id="phone-input"
                                type="tel"
                                name="phone"
                                class="w-full border-2 rounded border-gray-400 dark:border-gray-600 bg-transparent p-3"
                                required
                            />
                        </div>
                        <div class="py-2">
                            <label for="details-input"
                                >Tell Us About Your Project</label
                            >
                            <textarea
                                id="details-input"
                                name="details"
                                class="w-full border-2 rounded border-gray-400 dark:border-gray-600 bg-transparent p-3"
                                rows="10"
                                required
                            />
                        </div>
                        <div class="py-2">
                            <button
                                type="submit"
                                class="text-primary-500 rounded hover:bg-opacity-10 bg-opacity-0 bg-primary-500 transition-colors px-6 py-3 border-2 border-primary-500 font-bold text-xl"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                    <div class="lg:pl-20 lg:pt-0 pt-20">
                        <div>
                            <strong> Email: </strong>
                            <div>
                                <a
                                    href="mailto:info@modiimedia.com"
                                    class="underline decoration-primary-500 underline-offset-4 decoration-2 hover:decoration-4"
                                >
                                    info@modiimedia.com
                                </a>
                            </div>
                        </div>
                        <div class="mt-6">
                            <strong> Phone: </strong>
                            <div>
                                <a
                                    href="tel:+12103163129"
                                    class="underline decoration-primary-500 underline-offset-4 decoration-2 hover:decoration-4"
                                >
                                    (210) 316-3129
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
