/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configuration for Vercel deployment
    basePath: '',
    trailingSlash: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "randomuser.me"
            }
        ],
        unoptimized: true
    },
    output: 'export'
    // Removing rewrites as they're not compatible with static export
};

export default nextConfig;
