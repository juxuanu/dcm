import withExportImages from "next-export-optimize-images";

/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export"
};

export default withExportImages(nextConfig);
