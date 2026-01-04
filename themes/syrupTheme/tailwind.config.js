module.exports = {
  corePlugins: {
    // Disable unused plugins to reduce bundle size
    lineHeight: false,
    // other plugins you want to disable
  },
  theme: {
    fontFamily: {
      sans: "Helvetica,Helvetica Neue,Arial,Lucida Grande,sans-serif",
    },
    fontSize: {
      base: "3rem",
    },
    colors: {
      white: "#ffffff",
      primary: "#3a3a3a",
      secondary: "#111213",
    },
    spacing: {
      0: "0px",
    },
    margin: {
      0: "0px",
    },
    borderRadius: {
      DEFAULT: "0.25rem",
      100: "100%",
    },
    borderWidth: {
      0: "0px",
      DEFAULT: "1px",
    },
    boxShadow: {
      DEFAULT: "0 0 0 1px rgba(63,63,68,.05),0 1px 3px 0 rgba(63,63,68,.15)",
    },
  },
  variants: {
    extend: {
      borderWidth: ["first", "last"],
      margin: ["first", "last"],
      padding: ["first", "last"],
    },
  },
  plugins: [],
};