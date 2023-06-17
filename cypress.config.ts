import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'uq2ros',

  e2e: {
    baseUrl: 'https://lauorganization.vercel.app/',
  },

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
})
