
var elContentLogo = document.querySelector('.js-content-logo');
var elContentText = elContentLogo.querySelector('h1');
var colorBackground = elContentLogo.dataset.bgcolor;
var nLuminance = getLuminance(colorBackground);
var colorText;


function calcResolution() {

	if (window.innerWidth <= 768) {

		// Luminance is from 0 to 1
		if( nLuminance < 0.6 ) {
			colorText = elContentLogo.dataset.light;
		} else {
			colorText = elContentLogo.dataset.dark;
		}

		elContentLogo.style.backgroundColor = colorBackground;
		elContentText.style.color = colorText;

	} else {

		elContentLogo.removeAttribute('style');
		elContentText.removeAttribute('style');

	}
}

window.addEventListener('load', calcResolution);
window.addEventListener('resize', calcResolution);
