import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/boards101/',
  title: "Embedded Boards 101",
  description: "Basic Usage of Embedded Boards",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'WeAct', link: '/weact.html' }
    ],

    sidebar: [
      {
        text: 'WeAct',
        items: [
          { text: 'WeAct MSPM0G3507', link: '/weact/mspm0g3507.html' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/danguer' }
    ]
  },
  head: [
    [
      'script',
      { async: '', src: 'https://googletagmanager.com' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-R5BR3HWVHX');`
    ]
  ]
})
