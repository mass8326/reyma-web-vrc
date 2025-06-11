const checker = require("license-checker");

const whitelist = ["0BSD", "Apache-2.0", "MIT", "BSD-3-Clause"];

checker.init(
  {
    start: process.cwd(),
    onlyAllow: whitelist.join(";"),
    excludePackages: "anniversary-website@0.0.1",
  },
  (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    } else {
      console.info("License check passed!");
      process.exit(0);
    }
  },
);
