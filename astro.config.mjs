import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  // Speaker, team and sponsor images come from Firebase Storage; they are
  // downloaded and optimized at build time so visitors never hit Storage.
  image: {
    domains: ['firebasestorage.googleapis.com'],
  },
});
