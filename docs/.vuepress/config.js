module.exports = {
  base: '/blog-demo/',
  title: '小小小胖子',
  description: 'Vuepress blog demo',
  head: [
    ['link', {
      rel: 'icon',
      href: '/jianchi.png'
    }]
  ],
  themeConfig: {
    // 你的GitHub仓库
    repo: 'https://github.com/olewaHHH/blog-demo',
    // 自定义仓库链接文字。
    repoLabel: 'My GitHub',
    nav: [{
        text: '首页',
        link: '/'
      },
      // {
      //   text: 'Languages',
      //   items: [{
      //       text: 'Chinese',
      //       link: '/language/chinese'
      //     },
      //     {
      //       text: 'Japanese',
      //       link: '/language/japanese'
      //     }
      //   ]
      // },
    ],
    sidebar: [
      // ['/', '首页'],
      // ['/blog/FirstBlog.md', '我的第一篇博客']
      {
        title: 'HTML',
        collapsable: true,
        children: [
          '/html/biaoqian',
        ]
      },
      {
        title: 'HTML5',
        collapsable: true,
        children: [
          '/html5/biaoqianhtml5.md',
        ]
      }
    ]
  }
}