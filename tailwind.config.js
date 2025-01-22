<<<<<<< HEAD
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.trueGray,
        customGold: "#ae9b7f",
        lightGold: "#cec0ab"
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
=======
version https://git-lfs.github.com/spec/v1
oid sha256:9da268d37336a605cb5ce89a7186d0f857db364fa14169947de55176e3503ded
size 637
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
