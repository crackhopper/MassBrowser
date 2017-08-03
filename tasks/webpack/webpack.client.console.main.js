
'use strict'

const path = require('path')
const pkg = require('../../app/package.json')
const webpack = require('webpack')

const commont = require('./common')

let config = {
  devtool: '#source-map',
  entry: {
    client: path.join(common.rootDir, 'app/src/client/main.js')
  },
  externals: Object.keys(pkg.dependencies || {}),
  module: {
    rules: common.rules
  },
  node: {
    __dirname: false,
    __filename: false
  },
  output: {
    filename: 'client.js',
    libraryTarget: 'commonjs2',
    path: path.join(common.rootDir, 'app/dist/client')
  },
  plugins: common.plugis,
  resolve: common.resolve,
  target: 'node'
}

module.exports = config
