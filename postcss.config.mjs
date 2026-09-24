const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.magnific.com',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
};

export default config;
