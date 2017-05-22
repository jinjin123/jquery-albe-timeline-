//Json Object
var data = [
	{
		time: '2015-03-29',
		body: [{
			tag: 'h3',
			content: 'Lorem ipsum',
			attr: {
				cssclass: 'group-title'
			}
		},
		{
			tag: 'span',
			content: 'Lorem ipsum 2',
			attr: {
				cssclass: 'group-sub-title'
			}
		},
		{
			tag: 'p',
			content: '晒弟啊我的hi啊我的hi啊我的hi爱好低啊hi我的hi啊我的hi爱护我ID'
		}]
	},
	{
		time: '2015-04-15',
		body: [{
			tag: 'h3',
			content: 'Lorem ipsum',
			attr: {
				cssclass: 'group-title'
			}
		},
		{
			tag: 'span',
			content: 'Lorem ipsum 2',
			attr: {
				cssclass: 'group-sub-title'
			}
		},
		{
			tag: 'p',
			content: '晒弟啊我的hi啊我的hi啊我的hi爱好低啊hi我的hi啊我的hi爱护我ID'
		}]
	},
	{
		time: '2016-01-20',
		body: [{
			tag: 'h3',
			content: 'Lorem ipsum',
			attr: {
				cssclass: 'group-title'
			}
		},
		{
			tag: 'span',
			content: 'Lorem ipsum 2',
			attr: {
				cssclass: 'group-sub-title'
			}
		},
		{
			tag: 'p',
			content: '晒弟啊我的hi啊我的hi啊我的hi爱好低啊hi我的hi啊我的hi爱护我ID'
		}]
	},
	{
		time: '2013-01-20',
		body: [{
			tag: 'h3',
			content: 'Lorem ipsum',
			attr: {
				cssclass: 'group-title'
			}
		},
		{
			tag: 'span',
			content: 'Lorem ipsum 2',
			attr: {
				cssclass: 'group-sub-title'
			}
		},
		{
			tag: 'p',
			content: '晒弟啊我的hi啊我的hi啊我的hi爱好低啊hi我的hi啊我的hi爱护我ID'
		}]
	}];

$(function () {
	$("#myTimeline").albeTimeline(data);
});