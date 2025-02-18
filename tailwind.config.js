/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        available: "calc(100vh - 100px)",
      },
      fontFamily: {
        satoshi: ["Satoshi"],
        nunito: ["Nunito Sans"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".fill-available": {
          width: "-moz-available",
          width: "-webkit-fill-available",
        },
        ".fill-available-firefox": {
          width: "100vw",
        },
        ".fill-available-h": {
          height: "100%",
          height: "-webkit-fill-available",
        },
        ".border-gradient": {
          border: "1px solid",
          borderImageSource:
            "linear-gradient(161.06deg, rgba(0, 77, 244, 0) 13.7%, rgba(0, 77, 244, 0.4) 27.55%, #004DF4 36.4%, #26DDFF 53.88%, rgba(38, 221, 255, 0) 89.18%)",
          borderImageSlice: 1,
        },
        "min-h-md": {
          height: "calc( 96vh - 75px )",
        },
        ".gradient-button": {
          backgroundImage: `linear-gradient(to left,
                                #00C3FD 0%,
                                #0194FE 41%,  
                                #0284E2 79%,
                                ) 1`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
