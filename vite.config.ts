import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'styles': path.resolve(__dirname, 'src/assets/styles'),
            'components': path.resolve(__dirname, 'src/components'),
            'views': path.resolve(__dirname, 'src/views'),
            'types': path.resolve(__dirname, 'src/types'),
            'images': path.resolve(__dirname, 'src/assets/images'),
            'config': path.resolve(__dirname, 'src/config'),
            'utils': path.resolve(__dirname, 'src/utils'),
        }
    },
})
