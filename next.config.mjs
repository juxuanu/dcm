import withExportImages from "next-export-optimize-images";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    reactCompiler: true,
  },
};

export default withExportImages(nextConfig);
