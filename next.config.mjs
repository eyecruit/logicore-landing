/** @type {import('next').NextConfig} */
const nextConfig = {
    // Remove static export and trailingSlash for Vercel deployment
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "randomuser.me"
            }
        ]
    },
    // Fix for route groups in Vercel deployment
    experimental: {
        appDir: true
    }
};

export default nextConfig;
