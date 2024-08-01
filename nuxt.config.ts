import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    ssr: true,
    components: false,
    devtools: { enabled: true },
    app: {
        head: {
            title: 'Modii | Technology and Media Solutions',
            meta: [
                {
                    name: 'description',
                    content:
                        "Modii offers complete software development solutions for your business's needs. Whether you are taking a project from idea to production or you need to scale up an existing system, Modii has the expertise needed to bring to you success.",
                },
            ],
            link: [
                {
                    rel: 'icon',
                    href: '/_nuxt/assets/favicon.png',
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com',
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com',
                    crossorigin: '',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
                },
            ],
        },
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/eslint',
        '@nuxt/content',
        '@nuxt/image',
    ],
    srcDir: 'src',
    content: {
        sources: {
            content: {
                driver: 'fs',
                base: path.resolve(__dirname, './content'),
            },
        },
        highlight: {
            theme: 'one-dark-pro',
        },
    },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
    },
});
