const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorBlack: "#2e2e2e",
        colorSlate: "#3d72b4",
        colorLightSlate: "#16223e",
        gradientStart: "#004e92", 
        gradientEnd: "#000428",
      },
    },
  },
  plugins: [],
});
