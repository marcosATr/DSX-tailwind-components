/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./storybook/preview-body.html",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      dark: "#4B4B4B",
      primary: "#7367F0",
      "primary-light": "rgba(115, 103, 240, 0.16)",
      success: "#28C76F",
      "success-light": "rgba(40, 199, 111, 0.16)",
      danger: "#EA5455",
      "danger-light": "rgba(75, 75, 75, 0.16)",
      warning: "#FF9F43",
      "warning-light": "rgba(255, 159, 67, 0.16)",
      "gray-600": "rgba(255, 255, 255, 0.1)",
      gray: "rgba(255, 255, 255, 0.2)",
      "gray-300": "rgba(255, 255, 255, 0.5)",
      "gray-200": "rgba(255, 255, 255, 0.6)",
    },
    extend: {},
  },
  plugins: [],
};
