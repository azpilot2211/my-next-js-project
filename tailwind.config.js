/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        forum: ["forumregular", "serif"],
        roboto: ["robotoregular", "sans-serif"],
        robotobold: ["robotobold", "sans-serif"],
        robotolight: ["robotolight", "sans-serif"],
        antonio: ["antonioregular", "sans-serif"],
        didact: ["didact_gothicregular", "sans-serif"],
        playpen: ["playpen_sansregular", "cursive"]
      },
      backgroundImage: {
        'hero-home': "url('../public/herobg-1.webp')",
        'hero-services': "url('../public/herobg.webp')",
        'hero-products': "url('../public/herobg-prod.webp')",
      }
    },
  },
  plugins: [],
}

