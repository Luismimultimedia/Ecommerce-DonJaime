module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          '@fullhuman/postcss-purgecss': {
            content: [
              './src/components/**/*.{js,ts,jsx,tsx}',
              './src/pages/**/*.{js,ts,jsx,tsx}'
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
          }
        }
      : {})
  }
};
