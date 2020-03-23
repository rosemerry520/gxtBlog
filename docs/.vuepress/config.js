module.exports = {
	title: 'GXT-Blog',
	base: '/gxtBlog',
	description: '高校通前端开发记录',
	head: [
		['link', {rel: 'icon', href: '/logo.png'}]
	],
	themeConfig: {
		displayAllHeaders: true,
		nav: [
			{text: '首页', link: '/'},
			{text: '记录', link: '../content/frame'},
			{text: 'GitHub', link: 'https://github.com/chaseSpace/gxt-FrontEnd'}
		],
		sidebar: [{
			title: '框架',
			children: [
				'../content/frame'
			]
		}, {
			title: '插件',
			children: [
				'../content/plugin'
			]
		}, {
			title: '日志',
			children: [
				'../content/log'
			]
		}],
		sidebarDepth: 2
	}
}