import { 
  defineConfig, 
  presetAttributify, 
  presetIcons, 
  presetUno, 
  transformerDirectives 
} from 'unocss' 

export default defineConfig({

  presets: [
    // presetUno enables UnoCSS preset, which is a complete, customizable utility-first CSS framework.
    presetUno(),
    // presetIcons enables support for Iconify icons, allowing the use of thousands of icons from various icon sets.
    presetIcons(),
    // presetAttributify enables Attributify Mode in UnoCSS, a mode which allows most utilities to be applied directly using HTML attributes.
    presetAttributify(),
  ],
  
  // transformers are used to apply transformations to the CSS.
  transformers: [
    // transformerDirectives enables the directives transformer, which can apply directives like v-show, v-hide.
    transformerDirectives(),
  ],
})