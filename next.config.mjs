/** @type {import('next').NextConfig} */
const nextConfig = {
   reactCompiler: true,
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/**',
         },
         {
            protocol: 'https',
            hostname: 'via.placeholder.com',
            port: '',
            pathname: '/**',
         },
         {
            protocol: 'https',
            hostname: 'example.com',
            port: '',
            pathname: '/**',
         },
      ],
   },
};

export default nextConfig;
