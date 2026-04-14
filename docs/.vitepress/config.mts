import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Embedded Boards 101",
  description: "Basic Usage of Embedded Boards",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/boards101' },
      { text: 'WeAct', link: '/boards101/weact.html' }
    ],

    sidebar: [
      {
        text: 'WeAct',
        items: [
          { text: 'WeAct MSPM0G3507', link: '/boards101/weact/mspm0g3507.html' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/danguer' }
    ]
  }
})
