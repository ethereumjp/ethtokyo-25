import type { NextConfig } from "next";

// for archived github pages
const prefixPath = "/ethtokyo-25";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // output: "export",
  // i18n: { locales: ["en", "ja"], defaultLocale: "en", localeDetection: false },
  basePath: prefixPath,
  assetPrefix: prefixPath,
  images: {
    remotePatterns: [new URL("https://picsum.dev/**")],
  },
  compiler: {
    emotion: true,
  },
  env: {
    NEXT_PUBLIC_AIRTABLE_PAT: process.env.NEXT_PUBLIC_AIRTABLE_PAT,
    NEXT_PUBLIC_AIRTABLE_BASE: process.env.NEXT_PUBLIC_AIRTABLE_BASE,
    NEXT_PUBLIC_AIRTABLE_TABLE: process.env.NEXT_PUBLIC_AIRTABLE_TABLE,
  },
};

export default nextConfig;
