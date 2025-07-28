/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static export
  images: {
    unoptimized: true, // Required because Image Optimization is not supported in static export
  },
  basePath: '/palak-portfolio', // Use your GitHub repo name
};

export default nextConfig;
