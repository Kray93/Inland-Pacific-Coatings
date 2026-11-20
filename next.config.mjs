/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      // Concrete Staining was merged into Acid Stain Concrete
      { source: "/concrete-staining", destination: "/acid-stain-concrete", permanent: true },
    ];
  }
};

export default nextConfig;
