/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NEXT_EXPORT === 'true' ? 'export' : 'standalone',
}

export default nextConfig;
