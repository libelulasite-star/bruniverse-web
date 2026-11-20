import type { NextConfig } from "next";

// En GitHub Pages el sitio vive bajo /<repo>; en local y en dominio propio, en la raíz.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
