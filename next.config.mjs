/** @type {import('next').NextConfig} */

/**
 * Static export — this site deploys as prerendered files rsync'd into the Plesk
 * VPS doc-root (same model as belegendary.org), so the server runs no Node.
 *
 * Because there's no Node server, next.config `redirects()` can't run. The
 * FPO → Prove 301 migration lives in `public/.htaccess` instead (Apache/Plesk
 * reads it from the doc-root). Keep the two in sync.
 */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  // next/image can't optimize on a static host — serve the images as-is.
  images: { unoptimized: true },
};

export default nextConfig;
