// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPath: '/static',
  images: {
    loader: 'imgix', // Use 'imgix' for image optimization
    path: '/static/', // Path where images are served from
  },
};

module.exports = nextConfig;
