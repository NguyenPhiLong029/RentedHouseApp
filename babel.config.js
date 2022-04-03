module.exports = (api) => {
  api.cache(false);
  return {
    presets: ['@babel/env', '@babel/react', '@babel/preset-typescript'],
    plugins: [
      '@babel/plugin-transform-spread',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.js', '.tsx', '.json'],
          alias: {
            'package.json': './package.json',
            src: './src',
            assets: './assets'
          }
        }
      ]
    ]
  };
};
