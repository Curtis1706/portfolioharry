/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
    "daisyui": {
      "themes": [
        {
          "light": {
            "primary": "#570df8",
            "secondary": "#f000b8",
            "accent": "#37cdbe",
            "neutral": "#3d4451",
            "base-100": "#ffffff"
          }
        },
        {
          "dark": {
            "primary": "#793ef9",
            "secondary": "#f000b8",
            "accent": "#37cdbe",
            "neutral": "#191d24",
            "base-100": "#2a303c"
          }
        },
        {
          "cupcake": {
            "primary": "#65c3c8",
            "secondary": "#ef9fbc",
            "accent": "#eeaf3a",
            "neutral": "#291334",
            "base-100": "#faf7f5"
          }
        },
        {
          "bumblebee": {
            "primary": "#e0a82e",
            "secondary": "#f9d72f",
            "accent": "#181830",
            "neutral": "#181830",
            "base-100": "#ffffff"
          }
        },
        {
          "emerald": {
            "primary": "#10b981",
            "secondary": "#34d399",
            "accent": "#3b82f6",
            "neutral": "#1e293b",
            "base-100": "#ffffff"
          }
        },
        {
          "corporate": {
            "primary": "#4b6bfb",
            "secondary": "#7b92b2",
            "accent": "#67cba0",
            "neutral": "#181a2a",
            "base-100": "#ffffff"
          }
        },
        {
          "synthwave": {
            "primary": "#e779c1",
            "secondary": "#58c7f3",
            "accent": "#f3cc30",
            "neutral": "#20134e",
            "base-100": "#2d1b69"
          }
        },
        {
          "retro": {
            "primary": "#ef9995",
            "secondary": "#a4cbb4",
            "accent": "#dc8850",
            "neutral": "#2e282a",
            "base-100": "#ece3d8"
          }
        },
        {
          "cyberpunk": {
            "primary": "#ff7598",
            "secondary": "#75d1f0",
            "accent": "#f3f3f3",
            "neutral": "#4b5563",
            "base-100": "#000000"
          }
        },
        {
          "valentine": {
            "primary": "#e96d7b",
            "secondary": "#a991f7",
            "accent": "#f38ba8",
            "neutral": "#4e4e4e",
            "base-100": "#ffeff2"
          }
        },
        {
          "halloween": {
            "primary": "#f28c18",
            "secondary": "#e6501e",
            "accent": "#ffdb58",
            "neutral": "#1b1b1b",
            "base-100": "#222222"
          }
        },
        {
          "forest": {
            "primary": "#1eb854",
            "secondary": "#6ab04c",
            "accent": "#d3a514",
            "neutral": "#262626",
            "base-100": "#171717"
          }
        },
        {
          "aqua": {
            "primary": "#09ecf3",
            "secondary": "#20c997",
            "accent": "#f5d0fe",
            "neutral": "#181d31",
            "base-100": "#0f172a"
          }
        },
        {
          "lofi": {
            "primary": "#000000",
            "secondary": "#d1d5db",
            "accent": "#c0c0c0",
            "neutral": "#1c1917",
            "base-100": "#ffffff"
          }
        },
        {
          "dracula": {
            "primary": "#ff79c6",
            "secondary": "#bd93f9",
            "accent": "#ffb86c",
            "neutral": "#282a36",
            "base-100": "#44475a"
          }
        },
        {
          "luxury": {
            "primary": "#ffffff",
            "secondary": "#a990f7",
            "accent": "#f6c177",
            "neutral": "#201f28",
            "base-100": "#17141f"
          }
        },
        {
          "cmyk": {
            "primary": "#00ffff",
            "secondary": "#ff00ff",
            "accent": "#ffff00",
            "neutral": "#101820",
            "base-100": "#ffffff"
          }
        },
        {
          "autumn": {
            "primary": "#d97706",
            "secondary": "#a16207",
            "accent": "#f97316",
            "neutral": "#1c1917",
            "base-100": "#fffbeb"
          }
        }
      ]
    }
  
}

