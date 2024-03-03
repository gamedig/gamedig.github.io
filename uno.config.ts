import {
    defineConfig,
    presetUno,
    presetIcons,
    presetAttributify,
    transformerDirectives,
} from 'unocss';

export default defineConfig({
    presets: [presetUno(), presetIcons(), presetAttributify()],
    transformers: [transformerDirectives()],
});
