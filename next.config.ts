import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` emits a fully static site to /out.
  output: "export",
  // Required for `output: 'export'` — the optimizer needs a server at runtime.
  images: { unoptimized: true },
  // Emit /projects/foo/index.html rather than /projects/foo.html.
  trailingSlash: true,
};

export default nextConfig;
