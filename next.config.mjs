/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configuration for Vercel deployment
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "randomuser.me"
            }
        ]
    },
    // Add rewrites for route groups
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/main'
            }
        ];
    }
};

export default nextConfig;
