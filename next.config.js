/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env:{
    API_URL: process.env.API_URL,
    PUBLISHER_KEY: process.env.PUBLISHER_KEY
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        port: '',
        pathname: '/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      },
      {
        protocol: 'http',
        hostname: "myaddmin.virtualxpose.com.au",
        port: '',
        pathname: '/driving/drivierImages/**',
      },
    ],
  },

}
module.exports = {
  trailingSlash: true,
  
}



module.exports = nextConfig
