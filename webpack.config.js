const path = require('path')

const createExpoWebPackConfig = require('@expo/webpack-config')

module.exports = async function (env, argv) {
  const config = await createExpoWebPackConfig(env, argv)
  config.module.rules.push({
    test: /\.ts$/,
    loader: 'babel-loader',
    include: [
      path.join(__dirname, 'node_modules/react-router-native')
    ]
  })
}