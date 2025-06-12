/** @type {import('next').NextConfig} */
const nextConfig = {
    // Remove static export for Vercel deployment
    // output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "randomuser.me"
            }
        ],
        unoptimized: true
    },
    // Add trailing slashes for better routing
    trailingSlash: true
};

export default nextConfig;
