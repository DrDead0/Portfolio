/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:["class"],
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
  
      // Or if using "src" directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    prefix:"",
    theme: {
      container:{
        center: true,
        padding: "15px",
       
      },
      screen:{
        sm:"640px",  
        md:"768px", 
        lg:"960px", 
        xl:"1200px", 
      },
      extend: {
        keyframe:{
          "according-down":{
            from:{height:"0"},
            to:{height:"var(--radix-according-content-height)"},
          }
        },
        "a"
      },
    },
    plugins: [],
  };