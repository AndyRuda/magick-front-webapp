/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
    output: 'export',
    assetPrefix: './',
    // Optional: Change the output directory `out` -> `dist`
    distDir: 'dist',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}

module.exports = nextConfig
