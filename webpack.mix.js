const mix = require('laravel-mix');
const NovaExtension = require('./NovaExtension');
const tailwindcss = require('tailwindcss');

mix.extend('nova', new NovaExtension());

mix.setPublicPath('dist')
    .js('resources/js/index.js', 'js/field.js')
    .vue({ version: 3 })
    .sass('resources/sass/field.scss', 'css')
    .options({
        postCss: [tailwindcss('./tailwind.config.js')],
    })
    .nova('szaleq/nova-editor');
