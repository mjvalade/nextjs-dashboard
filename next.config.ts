import type { NextConfig } from 'next';
const path = require('path');

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    // Points to the parent directory containing node_modules/next
    root: path.join(__dirname, '../../'),
  },
};

export default nextConfig;
