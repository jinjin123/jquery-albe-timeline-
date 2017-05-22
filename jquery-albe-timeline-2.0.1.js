(function ($) {
	$.fn.albeTimeline = function (json, options) {
		var _this = this;
		var settings = $.extend({}, $.fn.albeTimeline.defaults, options);
		var idioma = ($.fn.albeTimeline.languages.hasOwnProperty(settings.language)) ? $.fn.albeTimeline.languages[settings.language] :
			{ //zh-CN
				days: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
				months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				msgEmptyContent: "没有信息显示！"
			};
		//'string' convert to 'object'.
		if (typeof (json) == 'string') {
			json = $.parseJSON(json);
		}

		//Exibe mensagem padão
		if ($.isEmptyObject(json)) {
			console.warn(idioma.msgEmptyContent);
			return;
		}

		//Ordena pela data
		json = json.sort(function (a, b) {
			return (settings.sortDesc) ? (Date.parse(b['time']) - Date.parse(a['time'])) : (Date.parse(a['time']) - Date.parse(b['time']));
		});

		var eMenu = $("<ul>").attr("id", "timeline-menu");
		var eTimeline = $("<div>").attr("id", "timeline");

		$.each(json, function (index, element) {
			var ano = new Date(element.time).getFullYear();
			var separador = $(eTimeline).find(".group" + ano);
			//Se o separador não existe, cria.
			if (separador.length === 0) {
				separador = $("<div>").attr("id", ("year" + ano)).addClass("group" + ano).text(ano);
				$(eTimeline).append(separador);
				var anchor = $('<a>').attr("href", ("#year" + ano)).text(ano);
				eMenu.append($("<li>").append(anchor));
			}

			/****************************************SLOT****************************************/
			var badge = $('<div>').addClass("badge");
			badge.text(fnDateFormat(element.time, settings.formatDate, idioma));

			var ePanel = $("<div>").addClass("panel").append(badge);
			if (element.header) {
				var ePanelHead = $("<div>").addClass("panel-heading");
				var ePaneltitle = $("<h4>").addClass("panel-title").text(element.header);
				ePanelHead.append(ePaneltitle);
				ePanel.append(ePanelHead);
			}

			var ePanelBody = $("<div>").addClass("panel-body");
			$.each(element.body, function (index2, value2) {

				//Elemento HTML
				var e = $('<' + value2.tag + '>');

				//Atributos do elemento
				$(value2.attr).each(function () {
					$.each(this, function (index3, value3) {
						//Atributo especial, defido o 'class' ser palavra reservada no javascript.
						(index3.toLowerCase() === 'cssclass') ? e.addClass(value3) : e.attr(index3, value3);
					});
				});

				//Conteúdo do elemento
				if (value2.content)
					e.text(value2.content);

				ePanelBody.append(e);
			});

			ePanel.append(ePanelBody);

			if (element.footer) {
				var ePanelFooter = $("<div>").addClass("panel-footer").text(element.footer);
				ePanel.append(ePanelFooter);
			}

			var slot = $("<div class='article'>").append(ePanel);
			//Adiciona o item logo após ao respectivo separador.
			slot.insertAfter(separador);

			/****************************************FIM - SLOT****************************************/
		});

		//Marcador inicial da Timeline 
		var badge = $('<div>').addClass("badge").html("&nbsp;");
		var ePanel = $("<div>").addClass("panel").append(badge);
		eTimeline.append($("<div class='article'>").append(ePanel));
		eTimeline.append($("<div>").addClass("clearfix").css({ "float": "none" }));

		$.each(eTimeline.find(".article"), function (index, value) {
			//Adiciona classe css responsável por inverter o lado do item.
			$(this).addClass((index % 2 == 0) ? "" : "inverted");
			//Adiciona classe de animação.
			if (settings.effect && settings.effect != 'none')
				$(this).addClass("animated " + settings.effect);
		});

		//Exibe o menu
		if (settings.showMenu) {
			eMenu.appendTo(_this);
		}

		eTimeline.appendTo(_this);
		//return this;
	};

	$.fn.albeTimeline.languages = {};
	$.fn.albeTimeline.defaults = {
		effect: "fadeInUp",
		showMenu: true,
		language: "zh-CN",
		formatDate: 1,
		sortDesc: true,
	};

	//format
	//1.:"dd MMMM"
	//2.:"dd/MM/aaaaa"
	//3.:"dd de MMMM de aaaaa"
	//4.:"DD, dd de MMMM de aaaaa"
	//default.: "YYYY-MM-DD" (ISO 8601)
	function fnDateFormat(value, format, language) {
		var parts = value.split('-');
		var newDate = new Date(parts[0], parts[1], parts[2]);
		var d = newDate.getDate();
		var m = newDate.getMonth();
		switch (format) {
			case 1:
				return language.months[newDate.getMonth()] + d + "日";
			case 2:
				return newDate.getFullYear()+ "/" + m + "/" + d;  
			case 3:
				return newDate.getFullYear() + "年" + language.months[newDate.getMonth()] + d + "日";
			case 4:
				return newDate.getFullYear() + "年" + language.months[newDate.getMonth()] + d + "日   " + language.days[newDate.getDay()].substring(0, 3); 
			default:
				return newDate.getFullYear() + "-" + m + "-" + d;
		}
	};

})(jQuery);