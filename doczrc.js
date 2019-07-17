import { css } from "styled-components"

export default {
  title: "Avail Design Kit",
  wrapper: "utils/wrapper.js",
  menu: ["Getting Started", "Colors", { name: "Components", menu: ["Overview", "Base"] }],
  base: "/",
  themeConfig: {
    mode: "light",
    showPlaygroundEditor: true,
    fonts: {
      display: "'Nunito', sans-serif"
    },
    colors: {
      primary: "#0f3e6f",
      grayUltraLight: "#f3f3f3",
      grayExtraLight: "#c7c7c7",
      grayLight: "#6f6f6f",
      gray: "#2d2d2d"
    },
    codemirrorTheme: "material",
    styles: {
      playground: css`
        padding: 4rem;
      `
    }
  },
  htmlContext: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href: "https://codemirror.net/theme/material.css"
        }
      ]
    }
  }
}
