
var elContentMedia = document.querySelector('.js-content-media');
var elContentText = elContentMedia.querySelector('h1');
var colorBackground = elContentMedia.dataset.bgcolor;
var nLuminance = getLuminance(colorBackground);
var colorText;


function calcResolution() {

	if (window.innerWidth <= 768) {

		// Luminance is from 0 to 1
		if( nLuminance < 0.6 ) {
			colorText = elContentMedia.dataset.textlight;
		} else {
			colorText = elContentMedia.dataset.textdark;
		}

		elContentMedia.style.backgroundColor = colorBackground;
		elContentText.style.color = colorText;

	} else {

		elContentMedia.removeAttribute('style');
		elContentText.removeAttribute('style');

	}
}

window.addEventListener('load', calcResolution);
window.addEventListener('resize', calcResolution);
