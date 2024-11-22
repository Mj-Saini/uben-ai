/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderImage: {
       'border_gradient': "linear-gradient(90deg,  #29252400, #2925244d 50%, #29252400)", 
      },
      backgroundImage: {
        'bg_gradient': "linear-gradient(to right, #F0F4FF, #FFFFFF)", 
        'yellow_gradient': "linear-gradient(90deg, #f8b410, #f6a60d)", 
        'homeCard_gradient': "linear-gradient(135deg, #eef2ff, #fff 50%, #fafafa)", 
        'aboutHero_gradient': " linear-gradient(155deg, #eef2ff, #fff 50%, #fefce8)", 
        'yellow_bg_gradient': " linear-gradient(225deg, #fff0, #fff),linear-gradient(90deg, #facc15, #f59e0b)", 
        'popular_bg_gradient': " linear-gradient(145deg, #fffac5, #fff 50%, #fefce8);", 
         
       
        'Prices_gradient': "url('/images/png/pricing-bg-img.png')", 
        bg_img_gradient:"url('/images/png/faq-bg-gradient.png')",
        bg_img_westarted:"url('/images/png/we-started-img.png')"
        
      },
    },
  },
  plugins: [],
};
