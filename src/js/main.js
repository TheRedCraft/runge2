menu_element = document.querySelector('.buttons');
slider_element = document.querySelector('.slider');
menu_slider_element = document.querySelector('.menu_slider');

setTimeout(function () {
	menu_slider_element.style.visibility = 'visible';
	menu_slider_element.style.transform = 'translateY(7rem)';
}, 500);

slider_element.style.transform = localStorage.getItem('slider_transform');

menu_element.addEventListener('mousemove', function (mouseEvent) {
	var obj = document.querySelector('.buttons');
	var obj_left = 0;
	var obj_top = 0;
	var xpos;
	var ypos;
	while (obj.offsetParent) {
		obj_left += obj.offsetLeft;
		obj_top += obj.offsetTop;
		obj = obj.offsetParent;
	}
	if (mouseEvent) {
		xpos = mouseEvent.pageX;
		ypos = mouseEvent.pageY;
	} else {
		xpos = window.event.x + document.body.scrollLeft - 2;
		ypos = window.event.y + document.body.scrollTop - 2;
	}
	xpos -= obj_left;
	ypos -= obj_top;

	if (xpos > 130 && xpos < 240) {
		slider_element.style.transform = 'translateX(7rem)';
		localStorage.setItem('slider_transform', 'translateX(7rem)');
	} else if (xpos > 240 && xpos < 350) {
		slider_element.style.transform = 'translateX(14rem)';
		localStorage.setItem('slider_transform', 'translateX(14rem)');
	} else if (xpos > 350) {
		slider_element.style.transform = 'translateX(21rem)';
		localStorage.setItem('slider_transform', 'translateX(21rem)');
	} else {
		slider_element.style.transform = 'translateX(0rem)';
		localStorage.setItem('slider_transform', 'translateX(0rem)');
	}
});
