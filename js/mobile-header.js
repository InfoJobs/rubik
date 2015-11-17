$('document').ready(function(){
    var elBtnSave = document.querySelector('.js-btn-save');
	var elBtnCancel = document.querySelector('.js-btn-cancel');
	var elH1 = document.querySelector('h1');
	var elmodalPageHeader = document.querySelector('.js-modalPage-header');
	var elH1Width;

	function genericModalPage() {
		if (window.innerWidth < 481) {
			elBtnCancel.classList.add('close-modal');
			elBtnCancel.classList.add('btn-cancel');
			elBtnCancel.classList.remove('btn');
			elBtnCancel.classList.remove('btn-default');
			elBtnCancel.classList.remove('btn-medium');
			elmodalPageHeader.classList.add('modal-header');
			elmodalPageHeader.classList.add('mobile-header');
			elH1.classList.add('truncate');
			elH1.classList.remove('text-center');

			elH1Width = elmodalPageHeader.offsetWidth - elBtnCancel.offsetWidth - 15;

			elH1.style.width = elH1Width + 'px';

			elmodalPageHeader.style.top = "30px";

			elmodalPageHeader.nextElementSibling.classList.add('js-mobile-header-content');
		} else {
			elBtnCancel.classList.remove('close-modal');
			elBtnCancel.classList.remove('btn-cancel');
			elBtnCancel.classList.add('btn');
			elBtnCancel.classList.add('btn-default');
			elBtnCancel.classList.add('btn-medium');
			elmodalPageHeader.classList.remove('modal-header');
			elmodalPageHeader.classList.remove('mobile-header');
			elH1.classList.remove('truncate');
			elH1.classList.add('text-center');
			elH1.style.width = 'auto';

			elmodalPageHeader.nextElementSibling.classList.remove('js-mobile-header-content');
		}
	}

	function modalPage() {
		genericModalPage();

		if(elBtnSave != null && window.innerWidth < 481) {
			elBtnSave.classList.add('btn-save');
			elBtnSave.classList.remove('btn-medium');
			elBtnSave.classList.remove('margin-top');

			elH1Width = elH1Width - elBtnSave.offsetWidth;
			elH1.style.width = elH1Width + 'px';
		}
		else if(elBtnSave != null && window.innerWidth >= 481) {
			elBtnSave.classList.remove('btn-save');
			elBtnSave.classList.add('btn-medium');
			elBtnSave.classList.add('margin-top');
		}
	}

	modalPage();
	window.addEventListener('resize', modalPage);
});
