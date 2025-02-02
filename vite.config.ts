import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      exclude: [
        '**/*.stories.tsx',
        '**/*.test.tsx',
        '**/*.mdx',
        '.storybook',
        'storybook-static'
      ]
    })
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: '@ravenyx/tailwind-ui',
      formats: ['es', 'cjs'],
      fileName: (format) => `ravenyx-tailwind-ui.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        preserveModules: false
      }
    }
  }
})
