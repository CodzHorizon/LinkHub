/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'encrypted-tbn2.gstatic.com',  // Google thumbnail
            'images.unsplash.com',           // Unsplash
            'cdn.sanity.io',                 // Sanity CMS
            'res.cloudinary.com',            // Cloudinary CDN
            'pbs.twimg.com',                 // Twitter profile images
            'avatars.githubusercontent.com',// GitHub avatars
            'lh3.googleusercontent.com',    // Google user profile pics
            'media.discordapp.net',          // Discord media
            'cdn.discordapp.com',            // Discord CDN
            'i.imgur.com',                   // Imgur
            'cdn.shopify.com',               // Shopify CDN
        ],
    },
};

export default nextConfig;
