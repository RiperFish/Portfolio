const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: 'class',
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.js',
    ],

    theme: {
        extend: {
            fontFamily: {
                poppins: 'Poppins'
            },
            colors: {
                heroBg: "#222629",
                fullPageBg: "#f4f6fbb3",
                grayTextColor: "#454545",
                lightGrayTextColor: "#cbcbcb",
            }
        },
        screens: {

            'lg': { 'max': '1023px' },
            // => @media (max-width: 1023px) { ... }

            'md': { 'max': '767px' },
            // => @media (max-width: 767px) { ... }

            'sm': { 'max': '639px' },
            // => @media (max-width: 639px) { ... }
        }
    },

    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
