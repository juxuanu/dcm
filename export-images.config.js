/**
 * @type {import("next-export-optimize-images").Config}
 */
const config = {
  generateFormats: ["avif", "webp"],
  cacheDir: ".next/cache/optimized-images",
};

module.exports = config;
