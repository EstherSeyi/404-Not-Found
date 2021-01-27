module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      20: "1 1 20%",
      80: "2 2 80%",
      40: "1 1 40%",
      35: "1 1 35%",
      60: "2 2 60%",
    },
    fontSize: {
      14: "0.875rem",
      18: "1.125rem",
      24: "1.5rem",
      38: "2.375rem",
    },
    maxWidth: {
      400: "400px",
      500: "500px",
      900: "900px",
    },

    extend: {
      inset: { "95%": "95%" },
      width: {
        50: "50px",
      },
      lineHeight: {
        50: "50px",
      },

      fontFamily: {
        spaceMono: ["Space Mono", "sans-serif"],
        inconsolata: ["Inconsolata", "monospace"],
      },
      colors: {
        dark: "#333333",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
