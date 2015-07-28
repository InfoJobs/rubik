$('document').ready(function(){
    var elGroupDate = document.querySelectorAll('.input-group-date input');
    patroNum = /[\d]{2}$/;

    function displayDay(){
        if (elGroupDate[0].value.length === 2 && patroNum.test(elGroupDate[0].value)){
            elGroupDate[1].focus();
        }
    }

    function displayMonth(){
        if (elGroupDate[1].value.length === 2 && patroNum.test(elGroupDate[0].value)){
            elGroupDate[2].focus();
        }
    }

    document.getElementById("day").addEventListener('keyup',displayDay);
    document.getElementById("month").addEventListener('keyup',displayMonth);
});
