import {defineConfig, HeadConfig} from 'vitepress'

const head: HeadConfig[] = [];
// @ts-ignore
const {NODE_ENV} = process.env;

if (NODE_ENV === 'production') {
  head.push([
    'script',
    {
      async: 'true',
      src: 'https://www.googletagmanager.com/gtag/js?id=G-030C1RBPCR',
    },
  ]);
  head.push(
      [
        'script',
        {},
        "window.dataLayer = window.dataLayer || [];  function gtag(){dataLayer.push(arguments);}  gtag('js', new Date());  gtag('config', 'G-030C1RBPCR');",
      ]);
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "The state of TDD",
  description: "The TDD state in the industry of software development",
  head,
  srcExclude: ["results"],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
