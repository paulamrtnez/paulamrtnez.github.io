const nav = document.getElementsByClassName("menu");

var navTop = nav.offsetTop;

window.onscroll = function() { addMenuSticky() };

function addMenuSticky() {
	if (window.pageYOffset >= navTop) {
    	nav.classList.add("menu-sticky")
	} else {
    	nav.classList.remove("menu-sticky");
	}
}