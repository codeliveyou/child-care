/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(to bottom, #0000009C 0%, #000000 100%)",
        "auth-gradient": "linear-gradient(to bottom, #6BDCF5 0%, #B6C2E1 100%)",
      },
      colors: {
        primary: {
          background: "#211DEF",
          text: "#374151",
          border: "#1D19E5",
          placeholder: "#6F6F6F",
        },
        danger: {
          background: "#FF3E4C",
        },
        light: {
          background: "#E9E9F3",
          border: "#DBF6D4",
        },
        dark: {
          background: "#1C1C1C",
        },
        focused: {
          background: "#9E9CEF",
        },
        disabled: { text: "#B6C2E1" },
      },
      boxShadow: {
        basic: "0px 4px 4px 0px #00000040",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
