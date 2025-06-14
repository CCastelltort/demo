import { createApp, h } from 'vue'
import '../css/app.css';
import { createInertiaApp } from '@inertiajs/vue3'
import Layout from "./Shared/Layout.vue";

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    
    const page = pages[`./Pages/${name}.vue`]

    if (!page.default.layout) {
      page.default.layout = Layout
    }

    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
  progress: {
    // The delay after which the progress bar will appear, in milliseconds...
    delay: 250,

    // The color of the progress bar...
    color: '#29d',

    // Whether to include the default NProgress styles...
    includeCSS: true,

    // Whether the NProgress spinner will be shown...
    showSpinner: false,
  },
})