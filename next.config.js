/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.wav$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/_next/static/wav/',
                        outputPath: 'static/wav/',
                        name: '[name].[ext]',
                    },
                },
            ],
        });

        return config;
    },
}

module.exports = nextConfig
