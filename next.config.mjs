import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com",
            "res.cloudinary.com",
            "images.unsplash.com"
        ]
    }
}

export default withNextIntl(nextConfig);