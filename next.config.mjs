/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, options) => {
        config.module.rules.push(      {
          test: /\.(glb|gltf|mp3)$/,
          type: 'asset',
          generator: {
            filename: 'static/chunks/[path][name].[hash][ext]'
          },
        });
    
          return config;
      }
};

export default nextConfig;
