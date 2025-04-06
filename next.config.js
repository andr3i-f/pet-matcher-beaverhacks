/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.pexels.com', 'img.hobbyfarms.com', 'cdn.pixabay.com', 'media.istockphoto.com', 't4.ftcdn.net', 'cdn.mos.cms.futurecdn.net', 'www.safehavenforcats.org', 'preview.redd.it', 'people.com', 'images.squarespace-cdn.com', 'encrypted-tbn0.gstatic.com', 's3-media0.fl.yelpcdn.com', 'static.wixstatic.com', 'assets3.thrillist.com', 'hips.hearstapps.com', 'vetsonparker.com.au', 'www.omlet.us', 'www.bluecross.org.uk'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/:path*`
      }
    ];
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  }
};

module.exports = nextConfig;
