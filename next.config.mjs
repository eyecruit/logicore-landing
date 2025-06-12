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
    // Remove rewrites as they might be causing issues
    // async rewrites() {
    //     return [
    //         {
    //             source: '/',
    //             destination: '/main'
    //         }
    //     ];
    // }
};

export default nextConfig;
