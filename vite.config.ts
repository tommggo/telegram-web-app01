import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
   plugins: [react(), nodePolyfills(),basicSsl()],
   base: '/telegram-web-app01/',
});

