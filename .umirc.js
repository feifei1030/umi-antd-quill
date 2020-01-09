
const webpack = require('webpack')

// ref: https://umijs.org/config/
export default {
  treeShaking: true,  

  // react-quill issue  https://github.com/zenoamaro/react-quill/issues/224
  // 语法参考 https://github.com/neutrinojs/webpack-chain
  chainWebpack: (config) => {
    config
      .plugin("ProvidePlugin")
      .use(webpack.ProvidePlugin, [{        
        'window.Quill': 'quill',
        'Quill': 'quill'
      }])

    config.module.rule('js').exclude.add(/node_modules(?!\/quill-image-drop-module|quill-image-resize-module)/)
  },

  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: false,
      title: 'umi-antd-quill',
      dll: false,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}
