
var burger = document.getElementsByClassName('burger')[0];

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




