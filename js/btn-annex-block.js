function btnHeight() {

    var elBtnGroup = document.querySelectorAll('.js-btn-group-annex');
    var elBtn;
    var heightBtn;

    [].forEach.call( elBtnGroup, function( target ){
        elBtn = target.querySelector('.btn');
        heightBtn = target.offsetHeight;

        if(heightBtn > 30){
            elBtn.classList.add('margin-bottom');
        }
    });
};

window.addEventListener('DOMContentLoaded', btnHeight);
window.addEventListener('resize', btnHeight);
