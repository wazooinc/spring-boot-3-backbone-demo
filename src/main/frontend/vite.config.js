import {defineConfig} from 'vite'
import inject from '@rollup/plugin-inject'
export default defineConfig({
    plugins: [
        inject({
            $: 'jquery',
            jQuery: 'jquery',
            _: 'underscore',
            Backbone: 'backbone'
        })
    ],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                secure: false
            }
        }
    }
})
