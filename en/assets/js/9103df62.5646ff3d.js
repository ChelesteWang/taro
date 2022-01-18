"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[15500],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12544:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),i=["components"],s={title:"\u7b2c\u4e09\u65b9\u5de5\u5177"},l=void 0,p={unversionedId:"external-libraries",id:"external-libraries",isDocsHomePage:!1,title:"\u7b2c\u4e09\u65b9\u5de5\u5177",description:"\u6982\u8ff0",source:"@site/docs/external-libraries.md",sourceDirName:".",slug:"/external-libraries",permalink:"/taro/en/docs/next/external-libraries",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/external-libraries.md",tags:[],version:"current",frontMatter:{title:"\u7b2c\u4e09\u65b9\u5de5\u5177"},sidebar:"docs",previous:{title:"Reconciler",permalink:"/taro/en/docs/next/platform-plugin-reconciler"},next:{title:"Community Quality Material",permalink:"/taro/en/docs/next/treasures"}},c=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",children:[],level:2},{value:"\u57fa\u7840\u914d\u7f6e",id:"\u57fa\u7840\u914d\u7f6e",children:[{value:"Webpack",id:"webpack",children:[],level:3},{value:"Babel",id:"babel",children:[],level:3}],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"StoryBook",id:"storybook",children:[],level:3},{value:"Jest",id:"jest",children:[{value:"TabBar",id:"tabbar",children:[],level:4}],level:3}],level:2}],u={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,o.kt)("p",null,"\u5982\u4f55\u5229\u7528\u597d\u7b2c\u4e09\u65b9\u5de5\u5177\u63d0\u5347\u4f7f\u7528 Taro \u7684\u5f00\u53d1\u4f53\u9a8c\u662f\u5f88\u591a\u793e\u533a\u5185\u5f00\u53d1\u8005\u5171\u6709\u7684\u95ee\u9898\uff0c\u6bd4\u65b9\u8bf4\u5982\u4f55\u5229\u7528 Jest \u6d4b\u8bd5\u6216\u8005\u4f7f\u7528 StoryBook \u7f16\u5199\u7ec4\u4ef6\u5e93\u793a\u4f8b\u7b49\u7b49\uff0c\u90fd\u9700\u8981\u501f\u52a9 Taro-H5 \u76f8\u5173\u7684\u80fd\u529b\u3002"),(0,o.kt)("h2",{id:"\u57fa\u7840\u914d\u7f6e"},"\u57fa\u7840\u914d\u7f6e"),(0,o.kt)("p",null,"\u6b63\u5e38\u4f7f\u7528 Taro \u65f6\uff0ccli \u4f1a\u5e2e\u52a9\u6211\u4eec\u5b8c\u6210\u7f16\u8bd1\u914d\u7f6e\u5e76\u5bf9 ast \u505a\u51fa\u4e00\u5b9a\u7684\u4fee\u6539\uff0c\u5982\u679c\u4f7f\u7528\u7b2c\u4e09\u65b9\u5de5\u5177\uff0c\u90a3\u4e48\u6211\u4eec\u9700\u8981\u5bf9 webpack \u548c babel \u76f8\u5173\u7684\u914d\u7f6e\u505a\u51fa\u4e00\u5b9a\u7684\u4fee\u6539\u3002"),(0,o.kt)("h3",{id:"webpack"},"Webpack"),(0,o.kt)("p",null,"Taro-H5 \u4e2d\u4f7f\u7528\u5230\u7684 API \u5b9e\u9645\u4e0a\u5e76\u4e0d\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"@tarojs/taro")," \u7684\u5165\u53e3\u6587\u4ef6\u4e4b\u4e0b\uff0c\u5982\u679c\u60f3\u8981\u4f7f\u7528\u9700\u8981\u5728 Webpack \u4e2d\u914d\u7f6e\u89e3\u6790\u5165\u53e3\u548c\u522b\u540d\u5982\u4e0b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="webpack.config.js"',title:'"webpack.config.js"'},"module.exports = {\n  // ...\n  resolve: {\n    mainFields: ['main:h5', 'browser', 'module', 'jsnext:main', 'main'],\n    alias: {\n      ...config.resolve.alias,\n      '@tarojs/taro': '@tarojs/taro-h5'\n    },\n  },\n  // ...\n}\n")),(0,o.kt)("h3",{id:"babel"},"Babel"),(0,o.kt)("p",null,"Taro-H5 \u5b9e\u9645\u5e76\u6ca1\u6709\u5728 Taro \u5bf9\u8c61\u4e0a\u6302\u8f7d\u6240\u6709\u7684 API\uff0c\u8fd9\u662f\u4e3a\u4e86\u907f\u514d\u4e0d\u5fc5\u8981\u7684 API \u5360\u7528\u5305\u4f53\u7684\u5927\u5c0f\uff0c\u90a3\u4e48\u4e3a\u4e86\u517c\u5bb9\u5c0f\u7a0b\u5e8f\u7684 API \u4f7f\u7528\u65b9\u6cd5\u5c31\u9700\u8981\u5bf9\u5f00\u53d1\u8005\u7684\u4ee3\u7801\u5728\u7f16\u8bd1\u524d\u505a\u51fa\u4e00\u4e9b\u8c03\u6574\uff0c\u5728\u4f7f\u7528\u7b2c\u4e09\u65b9\u5de5\u5177\u65f6\uff0c\u4e5f\u9700\u8981\u901a\u8fc7\u5f15\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-plugin-transform-taroapi")," \u4f9d\u8d56\u5b8c\u6210\u8fd9\u4e00\u64cd\u4f5c\u3002"),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("h3",{id:"storybook"},"StoryBook"),(0,o.kt)("p",null,"\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"StoryBook: 6.4.13")," \u4e3a\u4f8b\uff0c\u5728 Taro \u4e2d\u4f7f\u7528\u9700\u8981\u5728 StoryBook \u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\uff0c\u66f4\u65b0\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".storybook/main.js"',title:'".storybook/main.js"'},"const path = require('path')\n\nmodule.exports = {\n  // ...\n  babel: options => ({\n    ...options,\n    plugins: [\n      ...options.plugins,\n      [require('babel-plugin-transform-taroapi').default, {\n        apis: require(require.resolve('@tarojs/taro-h5/dist/taroApis', { basedir: path.resolve(__dirname, '..') })),\n        packageName: '@tarojs/taro'\n      }],\n    ]\n  }),\n  webpackFinal: config => ({\n    ...config,\n    resolve: {\n      ...config.resolve,\n      mainFields: ['main:h5', 'browser', 'module', 'jsnext:main', 'main'],\n      alias: {\n        ...config.resolve.alias,\n        '@tarojs/taro': '@tarojs/taro-h5'\n      },\n    },\n    plugins: [\n      ...config.plugins,\n      new webpack.DefinePlugin({\n        'process.env.TARO_ENV': JSON.stringify('h5'),\n        ENABLE_INNER_HTML: JSON.stringify(false),\n        ENABLE_ADJACENT_HTML: JSON.stringify(false),\n        ENABLE_SIZE_APIS: JSON.stringify(false),\n        ENABLE_TEMPLATE_CONTENT: JSON.stringify(false),\n        ENABLE_CLONE_NODE: JSON.stringify(false),\n        ENABLE_CONTAINS: JSON.stringify(false),\n        ENABLE_MUTATION_OBSERVER: JSON.stringify(false),\n      }),\n    ]\n  })\n  // ...\n}\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u8bf7\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8be5\u65b9\u6cd5\u4e0d\u9002\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"pxTransform")," \u65b9\u6cd5\uff0c\u5982\u679c\u9700\u8981\u4f7f\u7528\u8bf7\u5148\u8c03\u7528\u81ea\u884c\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"initPxTransform")," \u521d\u59cb\u5316\u914d\u7f6e (Taro \u5347\u7ea7\u5230 webpack5 \u4e4b\u540e\u4f1a\u63d0\u4f9b\u66ff\u4ee3\u89e3\u51b3\u9632\u8303)\u3002"))),(0,o.kt)("h3",{id:"jest"},"Jest"),(0,o.kt)("p",null,"\u4f7f\u7528 Jest \u6d4b\u8bd5\u4e5f\u662f\u7c7b\u4f3c\uff0c\u9700\u8981\u6dfb\u52a0\u914d\u7f6e\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="jest"',title:'"jest"'},"module.exports = {\n  // ...\n  globals: {\n    // ...\n    window: true,\n    ENABLE_INNER_HTML: true,\n    ENABLE_ADJACENT_HTML: true,\n    ENABLE_SIZE_APIS: true,\n    ENABLE_TEMPLATE_CONTENT: true,\n    ENABLE_CLONE_NODE: true,\n    ENABLE_CONTAINS: true,\n    ENABLE_MUTATION_OBSERVER: true,\n  },\n  moduleNameMapper: {\n    // ...\n    '@tarojs/taro': '@tarojs/taro-h5',\n    // '@tarojs/components': '@tarojs/components/dist-h5/react',\n    // '@tarojs/plugin-framework-react/dist/runtime': '<rootDir>/__mocks__/taro-framework',\n    // '@tarojs/plugin-framework-vue2/dist/runtime': '<rootDir>/__mocks__/taro-framework',\n    // '@tarojs/plugin-framework-vue3/dist/runtime': '<rootDir>/__mocks__/taro-framework',\n  }\n}\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u8bf7\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8be5\u65b9\u6cd5\u4e0d\u9002\u7528\u8def\u7531\u8df3\u8f6c\u548c\u90e8\u5206\u751f\u547d\u5468\u671f\u6d4b\u8bd5\u3002"))),(0,o.kt)("h4",{id:"tabbar"},"TabBar"),(0,o.kt)("p",null,"\u5982\u679c\u9879\u76ee\u9700\u8981\u6d4b\u8bd5 TabBar \u76f8\u5173\u7684\u903b\u8f91\uff0c\u9700\u8981\u5c06\u5e94\u7528\u5b8c\u6210\u521d\u59cb\u5316\uff0c\u53c2\u770b\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="__tests__/tab-bar.test.js"',title:'"__tests__/tab-bar.test.js"'},"import * as Taro from '@tarojs/taro-h5'\nimport { buildApp } from './utils'\n\ndescribe('tabbar', () => {\n  beforeEach(() => {\n    jest.resetAllMocks()\n    buildApp()\n  })\n\n  it('should be able to set/removeTabBarBadge', done => {\n    Taro.eventCenter.once('__taroSetTabBarBadge', res => res.successHandler({\n      errMsg: 'setTabBarBadge:ok'\n    }))\n    Taro.eventCenter.once('__taroRemoveTabBarBadge', res => res.successHandler({\n      errMsg: 'removeTabBarBadge:ok'\n    }))\n    Taro.setTabBarBadge({\n      index: 0,\n      text: 'text'\n    }).then(res => {\n      expect(res.errMsg).toBe('setTabBarBadge:ok')\n\n      Taro.removeTabBarBadge({\n        index: 0\n      }).then(res => {\n        expect(res.errMsg).toBe('removeTabBarBadge:ok')\n        done()\n      })\n    })\n  })\n})\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="__tests__/utils.js"',title:'"__tests__/utils.js"'},"import { createReactApp } from '@tarojs/plugin-framework-react/dist/runtime'\nimport { createRouter } from '@tarojs/router'\nimport React, { Component } from 'react'\nimport ReactDOM from 'react-test-renderer'\n\nconst appConfig: any = {\n  pages: [\n    'pages/index/index',\n    'pages/about/index'\n  ],\n  window: {\n    backgroundTextStyle: 'light',\n    navigationBarBackgroundColor: '#fff',\n    navigationBarTitleText: 'WeChat',\n    navigationBarTextStyle: 'black'\n  },\n  tabBar: {\n    color: '#333',\n    selectedColor: '#409EFF',\n    backgroundColor: '#fff',\n    borderStyle: 'black',\n    list: [{\n      pagePath: '/pages/index/index', text: '\u9996\u9875'\n    }, {\n      pagePath: '/pages/about/about', text: '\u5173\u4e8e'\n    }],\n    mode: 'hash',\n    basename: '/test/app',\n    customRoutes: {\n      '/pages/about/index': '/about'\n    }\n  },\n  router: { mode: 'hash' }\n}\n\nexport function buildApp () {\n  const config: any = { ...appConfig }\n  class App extends Component {\n    render () {\n      return this.props.children\n    }\n  }\n  config.routes = [\n    config.pages?.map(path => ({ path, load: () => null }))\n  ]\n  const inst = createReactApp(App, React, ReactDOM, config)\n  createRouter(inst, config, 'React')\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="__mocks__/taro-framework.js"',title:'"__mocks__/taro-framework.js"'},"const App = {}\nexport function createReactApp () { return { ...App } }\nexport function createVueApp () { return { ...App } }\nexport function createVue3App () { return { ...App } }\n")))}m.isMDXComponent=!0}}]);