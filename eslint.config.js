import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "eslint/config";
import pluginAstro from "eslint-plugin-astro";
import pluginImport from "eslint-plugin-import";
import configPrettier from "eslint-plugin-prettier/recommended";
import { globifyGitIgnoreFile } from "globify-gitignore";
import tseslint from "typescript-eslint";

export default defineConfig([
  await getGitIgnore(),
  configPrettier,
  getImportConfig(),
  ...tseslint.configs.recommended,
  ...pluginAstro.configs["flat/recommended"],
  {
    files: ["**/*.cjs", "**/*.cts"],
    rules: { "@typescript-eslint/no-require-imports": "off" },
  },
]);

async function getGitIgnore() {
  const filename = fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);
  const globs = await globifyGitIgnoreFile(dirname);
  const ignores = globs.map(({ glob, included }) => {
    if (!glob.startsWith("**/")) glob = "**/" + glob;
    return (included ? "!" : "") + glob;
  });
  return { ignores };
}

function getImportConfig() {
  return {
    plugins: { import: pluginImport },
    settings: {
      "import/parsers": { "@typescript-eslint/parser": [".ts", ".tsx"] },
    },
    rules: {
      "sort-imports": "off",
      "import/order": [
        "warn",
        {
          alphabetize: { order: "asc" },
          groups: [
            "type",
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
          ],
        },
      ],
    },
  };
}
