/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@collex/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
