function btnHeight() {

    var elBtnGroup = document.querySelectorAll('.js-btn-annex-block');
    var elBtn;


    [].forEach.call( elBtnGroup, function( target ){
        elBtn = target.querySelector('[class^="btn-"]');

        if (target.offsetHeight > elBtn.offsetHeight) {
            elBtn.classList.add('margin-bottom');
        }

    });

};

window.addEventListener('DOMContentLoaded', btnHeight);
window.addEventListener('resize', btnHeight);
