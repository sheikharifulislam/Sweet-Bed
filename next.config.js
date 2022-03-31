/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  env: {
      DB_URL: 'mongodb+srv://Ariful:JEQOqikmllHK0EYf@cluster0.jrudo.mongodb.net/Bookit?retryWrites=true&w=majority'
  }  
}

module.exports = nextConfig;
