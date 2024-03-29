module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
          '@/*': './src/*',
          '@assets': './src/assets',
          '@hooks': './src/hooks',
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@context': './src/context',
          '@navigation': './src/navigation',
          '@helpers': './src/helpers',
          '@api': './src/api',
          '@theme': './src/theme',
          '@models': './src/models',
          '@apollo-endpoints': './src/apollo-endpoints',
          '@queries': './src/apollo-endpoints/queries',
          '@mutations': './src/apollo-endpoints/mutations',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
