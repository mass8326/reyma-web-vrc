/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  tabWidth: 2,
  trailingComma: "all",
  overrides: [{ files: "*.json", options: { trailingComma: "none" } }],
};
