
var services = {
	'Лазерные процедуры': ['Лазерная блефаропластика (блефаролифтинг)', 'Skinsma', 'Неодимовое глубокое омоложение лица', 'Лазерная микроперфорация'], 
	'Косметология' : [], 
	'Дерматология': [], 
	'Уход за телом': [], 
	'Склеротерапия': [], 
	'Парикмахерские услуги': [' стрижка ', ' маникюр ', ' педикюр '], 
}

var linlinelife = {
	'Новости' : [], 
	'Медицинский туризм' : [], 
	'Партнеры' : [], 
	'Фото до и после' : [], 
	'О нас' : [], 
}

/* $(document).ready(function (){
	$('.menu-item').hover(function (){
		$('<div/>', {
			'class': 'submenu'
		}).appendTo($(this));

		$('<ul/>', {
			'class': 'submenu-category-list'
		}).appendTo($('div.submenu'));

		if ($(this).data("item") === "services") {
			for (let key in services) {
				$('<a/>', {
					'text': key, 
					'href': '#'
				}).appendTo($('<li/>').appendTo($('ul.submenu-category-list')));
			
			}
		}
		for (let key in services) {
			$('ul.submenu-category-list li a').on('click', function () {
				console.log('click - ' + $(this).text());
				if ($(this).text() == key) {
					console.log('keys values - ' + services[key]);
					if (services[key]) {
						$('<ul>').appendTo($('.submenu'));
						services[key].forEach(element => {
							$('<a/>', {
								'text': element,
								'href': '#'
							}).appendTo($('<li/>').appendTo($('ul.submenu')));
						});
					};
				};	
				
			});
		}

		if ($(this).data("item") === "linlinelife") {
			for (let key in linlinelife) {
				$('<a/>', {
					'text': key,
					'href': '#'
				}).appendTo($('<li/>').appendTo($('ul.submenu-category-list')));

			}
		}


	}, function(){
		$('div.submenu').hide();
	});

	
	
}); */
/* 
window.onhashchange = function () {
	checkHash();
}

checkHash();

function loadPage(pageName) {
	$.ajax('menu/' + pageName + ".html", {
		type: 'GET',
		dataType: 'html',
		success: dataLoaded,
		error: errorHandler
	});
}

function dataLoaded(data) {
	$('.menu-item').hover(function () {
		console.log(data);
		$(this).append(data);
		//$(data).appendTo($(this));
		// здесь нужно описать, что данные вставляются в откырвающееся подменю


	}, function () {
		$('div.submenu').hide();
	});
}

function errorHandler() {
	loadPage('main');
}

function checkHash() {
	var URLHash = window.location.hash;
	if (!URLHash) {
		loadPage('main');
		return false;
	}

	var hashStr = URLHash.slice(1);
	loadPage(hashStr);
}
 */


/* var burger = document.getElementsByClassName('burger')[0];

burger.onclick = function (e) {
	e.preventDefault();
   	document.getElementsByClassName('submenu-tablet')[0].style.display = 'block';
};

var galleryItem = document.getElementsByClassName('gallery-item');

for (let i=0; i< galleryItem.length; i++ ) {
    galleryItem[i].style.cssText = 'background: url(../LINLINE/pic/gallery/gallery'+(i+1)+'.png) center no-repeat; overflow: hidden;';
  }


var tabletSubmenu = document.getElementsByClassName('tablet-menu-details');

for (let i=0; i<tabletSubmenu.length; i++ ) {
	tabletSubmenu[i].onclick = function () {
		document.getElementsByClassName('submenu-tablet-links')[0].style.display = 'none';
		document.getElementsByClassName('tablet-submenu-details')[0].style.display = 'block';
	};

	var backLink = document.getElementsByClassName('back');
	
	backLink.onclick = function () {
		document.getElementsByClassName('submenu-tablet-links')[0].style.display = 'block';
		document.getElementsByClassName('tablet-submenu-details')[0].style.display = 'none';
	};

}
 */



