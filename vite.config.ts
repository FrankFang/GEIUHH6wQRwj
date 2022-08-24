import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { md } from "./plugins/md";
import { demo } from "./plugins/demo";

export default defineConfig({
  base: './',
  build: {
    assetsDir: 'assets',
  },
  plugins: [vue(), demo(), md()],
});
