/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('./taiwind.preset.ts')
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./storybook/preview-body.html",
  ],
};
