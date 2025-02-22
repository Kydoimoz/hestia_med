/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {protocol: "https", hostname: "**"}
        ]
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'], // SVG-Unterstützung
      });
      return config;
    },
  };
  
  export default nextConfig;