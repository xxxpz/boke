module.exports = {
  base: '/boke/',
  title: '小小小胖子知识库',
  description: 'Vuepress blog demo',
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.jpg'
    }]
  ],
  themeConfig: {
    // 你的GitHub仓库
    repo: 'https://github.com/xxxpz/boke',
    // 自定义仓库链接文字。
    repoLabel: 'My GitHub',
    nav: [{
        text: '首页',
        link: '/'
      },
      // {
      //   text: '我的',
      //   link: 'https://xxxpz.github.io/boke/css/index.html'
      // },
      {
        text: '前端分类',
        items: [{
            text: 'HTML',
            link: '/html/biaoqian'
          },
          {
            text: 'CSS',
            link: '/css/css1.md'
          },
          {
            text: 'JavaScript',
            link: '/javascript/js1.md'
          },
          {
            text: 'React',
            link: '/react/react1.md'
          },
          {
            text: 'ES6',
            link: '/es6/es61.md'
          },
          {
            text: 'TypeScript',
            link: '/ts/ts1.md'
          },
          {
            text: '小程序',
            link: '/weix/weix1.md'
          },
        ]
      },
      {
        text: '服务端分类',
        items: [{
            text: 'Node',
            link: '/node/node1.md'
          },
          {
            text: '数据库',
            link: '/mysql/mysql1.md'
          },
        ]
      },
      {
        text: '工具学习',
        items: [{
            text: 'WebPack',
            link: '/webpack/webpack1.md'
          },
          {
            text: 'Nginx',
            link: '/nginx/nginx1.md'
          },
          {
            text: '设计模式',
            link: '/shejimoshi/sjms1.md'
          },
          {
            text: '浏览器',
            link: '/liulanqi/liulan1.md'
          },
          {
            text: 'HTTP',
            link: '/http/http1.md'
          },
          {
            text: 'Docker',
            link: '/docker/docker1.md'
          },
          {
            text: '数据结构',
            link: '/dataset/data1.md'
          },
        ]
      },
      {
        text: '前端随笔',
        link: '/shuibi/shuibi1.md'
      },
    ],
    sidebar: [
      // ['/', '首页'],
      ['/blog/FirstBlog.md', '技术栈'],
      {
        title: 'HTML',
        collapsable: true,
        children: [
          '/html/biaoqian.md',
          '/html/biaoqianhtml5.md',
          '/html/html简介.md',
          '/html/html知识点.md'
        ]
      },
      {
        title: 'CSS',
        collapsable: true,
        children: [
          '/css/css1.md',
        ]
      },
      {
        title: 'JavaScript',
        collapsable: true,
        children: [
          '/javascript/js1.md',
          '/javascript/如何实现一个new.md',
          '/javascript/深度遍历和广度遍历.md',
          '/javascript/实现一个Array.flat.md'
        ]
      },
      {
        title: 'React',
        collapsable: true,
        children: [
          '/react/react1.md',
        ]
      },
      {
        title: 'ES6',
        collapsable: true,
        children: [
          '/es6/es61.md',
        ]
      },
      {
        title: 'TypeScript',
        collapsable: true,
        children: [
          '/ts/ts1.md',
        ]
      },
      {
        title: 'WebPack',
        collapsable: true,
        children: [
          '/webpack/webpack1.md',
        ]
      },
      {
        title: '设计模式',
        collapsable: true,
        children: [
          '/shejimoshi/sjms1.md',
        ]
      },
      {
        title: 'Git',
        collapsable: true,
        children: [
          '/git/git1.md',
        ]
      },
      {
        title: '浏览器',
        collapsable: true,
        children: [
          '/liulanqi/liulan1.md',
        ]
      },
      {
        title: 'HTTP',
        collapsable: true,
        children: [
          '/http/http1.md',
        ]
      },
      {
        title: '数据库',
        collapsable: true,
        children: [
          '/mysql/mysql1.md',
        ]
      },
      {
        title: 'Nginx',
        collapsable: true,
        children: [
          '/nginx/nginx1.md',
        ]
      },
      {
        title: 'Node',
        collapsable: true,
        children: [
          '/node/node1.md',
        ]
      },
      {
        title: '微信小程序',
        collapsable: true,
        children: [
          '/weix/weix1.md',
        ]
      },
      {
        title: 'Docker',
        collapsable: true,
        children: [
          '/docker/docker1.md',
        ]
      },
      {
        title: '数据结构',
        collapsable: true,
        children: [
          '/dataset/data1.md',
        ]
      },
      {
        title: '前端随笔',
        collapsable: true,
        children: [
          '/shuibi/shuibi1.md',
        ]
      },
    ]
  }
}