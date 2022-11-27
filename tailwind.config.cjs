/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./storybook/preview-body.html",
  ],
  theme: {
    colors: {
      //MAIN
      white: "#FFFFFF",
      black: "#000000",
      dark: "#4B4B4B",
      primary: "#7367F0",
      success: "#28C76F",
      danger: "#EA5455",
      warning: "#FF9F43",
      //EXTRA
      gray: "#e5e5e6",
      //TYPOGRAPHY
      lightText: "#b7b5be",
      defaultText: "#6f6b7d",
      //BORDERS
      lightBorder: "#DBDADE",
      //STATE
      "primary-light": "rgba(115, 103, 240, 0.16)",
      "success-light": "rgba(40, 199, 111, 0.16)",
      "danger-light": "rgba(75, 75, 75, 0.16)",
      "warning-light": "rgba(255, 159, 67, 0.16)",

      //TODO: Update and remove
      "gray-600": "rgba(255, 255, 255, 0.8)",
      "gray-300": "rgba(255, 255, 255, 0.5)",
      "gray-200": "rgba(255, 255, 255, 0.6)",
    },
    extend: {},
  },
  plugins: [],
};
