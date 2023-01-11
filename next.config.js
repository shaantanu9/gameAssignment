/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  // google adsense
  // cors allows all origins
  // mode: "production",
  // cors allows all origins
  // scope: "/", // default is '/' (all routes)
});

module.exports = withPWA({
  reactStrictMode: true,
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    BACKEND_URL: "https://wild-puce-hippopotamus-hose.cyclic.app",

    GITHUB_ID: "",
    GITHUB_SECRET: "",
    NEXT_PUBLIC_GOOGLE_ANALYTICS: "G-YGP9V9DBG7",
    BACKEND_THIS_SITE: "https://www.shodkk.com",
    NEXT_PUBLIC_ADSENSE_ID: "ca-pub-1532475473000178",
  },
  staticPageGenerationTimeout: 160, // default is 60 seconds
  images: {
    domains: [
      "database.shodkk.com",
      "wild-puce-hippopotamus-hose.cyclic.app",
      "shodkk.com",
      "shodkk-blog.vercel.app",
      "images.unsplash.com",
      "cdn.pixabay.com",
      "www.google.com",
      "dummyimage.com",
      "avatars.githubusercontent.com",
      "raw.githubusercontent.com",
      "www.shodkk.com",
      "cdn.pixabay.com",
      "images.pexels.com",
      "www.pexels.com",
      "pexels.com",
      "pixabay.com",
    ],
  },
});
