/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "neutral-50": "#F9F9F9",
        "neautral-100": "#F4F4F4",
        "neutral-200": "#E4E4E4",
        "neutral-300": "#D3D3D3",
        "neutral-400": "#A2A2A2",
        "neutral-500": "#737373",
        "neutral-600": "#525252",
        "neutral-700": "#404040",
        "neutral-800": "#262626",
        "neutral-900": "#171717",
        "neutral-950": "#0A0A0A",
        "neutral-1000": "#000000",
        "twitter-dark-background": "#040404",
        "twitter-blue-default": "#1D9BF0",
        "twitter-blue-hover": "#1871CA",
        "twitter-blue-disabled": "#1E5D87",
        "blue-wash": "rgba(117, 190, 239, 0.20)",
        "button-stroke": "#546A7A",
        "searchbar-fill": "#212327",
        "card-fill": "#16181C",
        "success": "#00BE74",
        "error": "#8B141A",
        "card-page-background": "#40596A",
        "information-text":"rgba(255, 255, 255, 0.60)",
        "cancel-profile-button-background":"rgba(0, 0, 0, 0.60)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        chirp: ["Chirp", "sans-serif"],
      },
      fontSize: {
        "48": "3rem",
        "31": "1.9375rem",
        "26": "1.625rem",
        "24": "1.5rem",
        "20": "1.25rem",
        "19": "1.1875rem",
        "17": "1.0625rem",
        "16": "1rem",
        "15": "0.9375rem",
        "14": "0.875rem",
        "13": "0.8125rem",
        "12": "0.75rem",
        "10": "0.625rem",
      },
      fontWeight: {
        "regular": "400",
      },
      boxShadow: {
        'button-custom-shadow': '0px 8px 16px 0px rgba(0, 0, 0, 0.25);'
      },
      width: {
        'custom-button-16': "27.625rem",
      },
    },
  },
  plugins: [],
}
