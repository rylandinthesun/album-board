module.exports = {
  mode: "jit",
  content: ["./app/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extends: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}
