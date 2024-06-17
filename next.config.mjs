/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://ingenia.com/snippets/test/contact.php', // URL de la API externa
      },
    ];
  },
}

export default nextConfig;
