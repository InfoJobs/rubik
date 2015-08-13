$('document').ready(function(){
        var elBtnSave = document.querySelector('.js-btn-save');
        var elBtnCancel = document.querySelector('.js-btn-cancel');
        var elH1 = document.querySelector('h1');
        var elmodalPageHeader = document.querySelector('.js-modalPage-header');
        var elH1Width;

        function modalPage() {
            if (window.innerWidth < 480) {
                elBtnCancel.classList.add('close-modal');
                elBtnCancel.classList.add('btn-cancel');
                elBtnCancel.classList.remove('btn');
                elBtnCancel.classList.remove('btn-default');
                elBtnCancel.classList.remove('btn-medium');
                elBtnSave.classList.add('btn-save');
                elBtnSave.classList.remove('btn-medium');
                elBtnSave.classList.remove('margin-top');
                elmodalPageHeader.classList.add('modal-header');
                elmodalPageHeader.classList.add('mobile-header');
                elH1.classList.add('truncate');
                elH1.classList.remove('text-center');

                elH1Width = elmodalPageHeader.offsetWidth - elBtnSave.offsetWidth - elBtnCancel.offsetWidth - 15;
                elH1.style.width = elH1Width + 'px';

                elmodalPageHeader.style.top = "30px";
            } else {
                elBtnCancel.classList.remove('close-modal');
                elBtnCancel.classList.remove('btn-cancel');
                elBtnCancel.classList.add('btn');
                elBtnCancel.classList.add('btn-default');
                elBtnCancel.classList.add('btn-medium');
                elBtnSave.classList.remove('btn-save');
                elBtnSave.classList.add('btn-medium');
                elBtnSave.classList.add('margin-top');
                elmodalPageHeader.classList.remove('modal-header');
                elmodalPageHeader.classList.remove('mobile-header');
                elH1.classList.remove('truncate');
                elH1.classList.add('text-center');

                elH1.style.width = 'auto';
            }
        }
        window.addEventListener('load', modalPage);
        window.addEventListener('resize', modalPage);
});
