import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT:'#000',
          100: '#000319'
        },
      },
    },
  },
};

export default nextConfig;
