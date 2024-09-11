/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
      "./index.html", // File index
      "./login.html", // File login
      "./dashboard.html", // File dashboard
      "./src/**/*.{js,ts,jsx,tsx}", // Semua file di dalam folder src
    ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      spaceGrotesk: ["Space Grotesk", "monospace"],
      urbanist: ["Urbanist", "sans-serif"],
    },
  },
  plugins: [],
};
