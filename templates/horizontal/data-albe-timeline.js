//Json Object
var data = [
	{
		time: '2015-03-29',
		header: '页头',
		body: [{
			tag: 'h1',
			content: "标题"
		},
		{
			tag: 'p',
			content: '晒弟啊我的hi啊我的hi啊我的hi爱好低啊hi我的hi啊我的hi爱护我ID'
		}],
		footer: '页脚'
	},
	{
		time: '2015-04-15',
		body: [{
			tag: 'h1',
			content: "基础内容"
		},
		{
			tag: 'p',
			content: '晒弟啊我的hi啊我的hi啊我的hi爱好低啊hi我的hi啊我的hi爱护我ID'
		}],
	},
	{
		time: '2016-01-20',
		body: [{
			tag: 'img',
			attr: {
				src: '../img/qrcode.png',
				width: '150px',
				cssclass: 'img-responsive'
			}
		},
		{
			tag: 'h2',
			content: '有图片'
		},
		{
			tag: 'p',
			content: '晒弟啊我的hi啊我的hi啊我的hi爱好低啊hi我的hi啊我的hi爱护我ID'
		}]
	},
	{
		time: '2013-01-20',
		body: [{
			tag: 'img',
			attr: {
				src: '../img/girl.png',
				width: '100px',
				cssclass: 'img-responsive'
			}
		},
		{
			tag: 'h2',
			content: '图片在右侧'
		},
		{
			tag: 'p',
			content: '晒弟啊我的hi啊我的hi啊我的hi爱好低啊hi我的hi啊我的hi爱护我ID'
		}]
	}
];

$(function () {
	$("#myTimeline").albeTimeline(data, {
		effect: "zoomIn",
		showMenu: false
	});
});
