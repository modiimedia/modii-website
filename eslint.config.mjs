import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
    rules: {
        'vue/multi-word-component-names': 0,
        'vue/html-self-closing': 0,
    },
});
