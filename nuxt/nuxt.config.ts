import { pwa } from "./app/config/pwa";
import { appDescription } from "./app/constants/index";

export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@unocss/nuxt",
    "@vite-pwa/nuxt",
    "@element-plus/nuxt",
  ],

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      viewport: "width=device-width,initial-scale=1",
      title: "Nuxt Mall",
      link: [
        { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "icon", type: "image/svg+xml", href: "/vite.svg" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: appDescription },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
        {
          name: "theme-color",
          media: "(prefers-color-scheme: light)",
          content: "white",
        },
        {
          name: "theme-color",
          media: "(prefers-color-scheme: dark)",
          content: "#222222",
        },
      ],
    },
  },

  css: [
    "@unocss/reset/tailwind.css",
    "~/styles/main.scss",
    "//at.alicdn.com/t/font_2143783_iq6z4ey5vu.css",
  ],

  colorMode: {
    classSuffix: "",
  },

  runtimeConfig: {
    apiSecret: "",
    public: {
      apiBase: "https://pcapi-xiaotuxian-front-devtest.itheima.net",
    },
  },
  devServer: {
    port: 8080,
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  compatibilityDate: "2024-08-14",

  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ["/"],
      ignore: ["/hi"],
    },
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  pwa,
});
