import type { Config } from 'tailwindcss';

export default {
    content: ['**/*.vue', '**/*.ts'],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'current',
            white: '#FFFFFF',
            black: '#000000',
            gray: {
                900: '#101010',
                800: '#141414',
                700: '#222222',
                600: '#545454',
                500: '#6B6B6B',
                400: '#999999',
                300: '#BEBEBE',
                200: '#D4D4D4',
                100: '#E8E8E8',
                50: '#F4F4F4',
            },
            primary: {
                900: '#580025',
                800: '#8C003B',
                700: '#BE0050',
                600: '#DC005C',
                500: '#FF056E',
                400: '#FF3C8E',
                300: '#FF6FAB',
                200: '#FFA6CB',
                100: '#FFCFE3',
                50: '#FFE9F2',
            },
        },
        fontFamily: {
            sans: '"Montserrat", sans-serif',
            body: '"Montserrat", sans-serif',
        },
    },
} satisfies Config;
