/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

// Custom color with css variable color in __theme_color.scss
function customColors(cssVar) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${cssVar}), ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${cssVar}), var(${opacityVariable}, 1))`;
    }
    return `rgb(var(${cssVar}))`;
  };
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "2xl": "128px",
      },
    },
    // fontFamily: {
    //   display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
    //   body: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
    // },

    extend: {
      colors: {
        primary: {
          100: "#E8EBF4",
          200: "#D2D7EA",
          300: "#A4A9C1",
          400: "#6B6F84",
          500: "#262833",
          600: "#1B1D2B",
          700: "#131524",
          800: "#0C0D1D",
          900: "#070818",
        },
        secondary: {
          100: "#D7FDDB",
          200: "#B0FCBF",
          300: "#87F8A9",
          400: "#68F19F",
          500: "#39e991",
          600: "#29C888",
          700: "#1CA77E",
          800: "#12876F",
          900: "#0A6F65",
        },
        info: {
          100: "#C8F0F9",
          200: "#94DDF3",
          300: "#5BB7DC",
          400: "#328BBA",
          500: "#04558C",
          600: "#024278",
          700: "#023164",
          800: "#012251",
          900: "#001843",
        },
        warning: {
          100: "#FDF0CB",
          200: "#FCDC99",
          300: "#F6C265",
          400: "#EDA63E",
          500: "#E27E04",
          600: "#C26302",
          700: "#A24B02",
          800: "#833601",
          900: "#6C2800",
        },
        danger: {
          100: "#F9D7CD",
          200: "#F3A99E",
          300: "#DD6D69",
          400: "#BB4047",
          500: "#8E1225",
          600: "#7A0D28",
          700: "#660928",
          800: "#520526",
          900: "#440325",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
