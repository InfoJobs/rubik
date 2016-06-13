function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

var nCurrentTestimonialsBody = 0;

function testimonials(){

  var testimonialsHeaderHeight = document.querySelector('.testimonials-header').clientHeight;
  var testimonialsBodyHeight = document.querySelector('.testimonials-body').clientHeight;

  var aTestimonialsBody = document.querySelectorAll('.testimonials-body');
  var nTestimonialsBody = 0;


  [].forEach.call(aTestimonialsBody, function(content) {
    if(content.clientHeight >= testimonialsBodyHeight) {
      testimonialsBodyHeight = content.clientHeight;
    }
    content.classList.add('hide');
    nTestimonialsBody = nTestimonialsBody + 1;
  });

  var ul = document.createElement("ul");
  var div = document.createElement("div");
  div.className = "testimonials-footer text-center margin-top";
  ul.className = "list-default list-inline js-testimonials-pagination";
  document.body.appendChild(div);
  div.appendChild(ul);

  for (var i = 1; i <= nTestimonialsBody; i++) {
      var li = document.createElement('li');
      var span = document.createElement('span');
      span.innerHTML = i;
      li.appendChild(span);
      ul.appendChild(li);
  }

  var testimonialsFooter = document.querySelector('.testimonials-footer');
  var lastTestimonialBody = aTestimonialsBody[nTestimonialsBody - 1];
  insertAfter(testimonialsFooter, lastTestimonialBody);
  //
  // if(document.querySelector('.testimonials').clientWidth < 768){
  //   var elToMove = document.querySelector('.pull-right');
  //   elToMove.classList.add('text-center');
  //   elToMove.querySelector('span').style.display = 'block';
  //   elToMove.querySelector('.btn').classList.add('margin-top');
  //
  //   insertAfter(elToMove, testimonialsFooter);
  // }

  var testimonialsFooterHeight = document.querySelector('.testimonials-footer').clientHeight + 20;

  var testimonialsTotalHeight = testimonialsBodyHeight + testimonialsHeaderHeight + testimonialsFooterHeight + 40;

  document.querySelector('.testimonials').style.height = testimonialsTotalHeight + 'px';



  aTestimonialsBody[0].classList.remove('hide');

  var aPagination = document.querySelectorAll('.js-testimonials-pagination li');

  document.querySelector('.testimonials').addEventListener('mouseover',function(){
    clearInterval(interval);
  });
  document.querySelector('.testimonials').addEventListener('mouseout',function(){
    interval = setInterval(automaticTestimonials,6000);
  });

  for(var i = 0; i < aPagination.length; i++){
    aPagination.item(i).addEventListener('click', function(){
      clearInterval(interval);
      document.querySelector('.testimonials').addEventListener('mouseout',function(){
        clearInterval(interval);
      });
      showTestimonialsBody(this,false);
    }.bind(i));
  }

  showTestimonialsBody(0,true);

  var countAutomaticTestimonials = 1;
  function automaticTestimonials() {
    showTestimonialsBody(countAutomaticTestimonials,true);
    countAutomaticTestimonials = (countAutomaticTestimonials + 1) % aTestimonialsBody.length;
  };

  var interval = setInterval(automaticTestimonials,6000);


  if(document.querySelector('.testimonials').clientWidth < 768){
    document.querySelector('.testimonials').style.height = 100 + '%';
    clearInterval(interval);
    var elToMove = document.querySelector('.pull-right');
    elToMove.classList.add('text-center');
    elToMove.querySelector('span').style.display = 'block';
    elToMove.querySelector('.btn').classList.add('margin-top');

    insertAfter(elToMove, testimonialsFooter);
  }
}

function showTestimonialsBody(item,automatic){
  var aTestimonialsBody = document.querySelectorAll('.testimonials-body');
  var aPagination = document.querySelectorAll('.js-testimonials-pagination li');
  [].forEach.call(aTestimonialsBody, function(content) {
    content.classList.add('hide');
  });

  aTestimonialsBody[item].classList.remove('fade-out-left','fade-out-right','hide');

  aTestimonialsBody[item].classList.add(nCurrentTestimonialsBody > item && !automatic ? 'fade-in-right' : 'fade-in-left');

  aPagination[nCurrentTestimonialsBody].classList.remove('active');
  aPagination[item].classList.add('active');

  nCurrentTestimonialsBody = item;
}

window.addEventListener('load', testimonials);
window.addEventListener('resize', testimonials);









var xDown = null;
var yDown = null;

  var iTouch = 0;

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            var aTestimonialsBody = document.querySelectorAll('.testimonials-body');

            if (iTouch < aTestimonialsBody.length-1) {
              aTestimonialsBody[iTouch].classList.add('fade-out','hide');
              aTestimonialsBody[iTouch].classList.remove('fade-in-left');

              aTestimonialsBody[iTouch+1].classList.remove('fade-out','hide');
              aTestimonialsBody[iTouch+1].classList.add('fade-in-left');

              iTouch = iTouch+1;
            }
        } else {
            var aTestimonialsBody = document.querySelectorAll('.testimonials-body');

            if (iTouch < aTestimonialsBody.length && iTouch > 0) {

              aTestimonialsBody[iTouch].classList.add('fade-out','hide');
              aTestimonialsBody[iTouch].classList.remove('fade-in-right');

              aTestimonialsBody[iTouch-1].classList.remove('fade-out','hide');
              aTestimonialsBody[iTouch-1].classList.add('fade-in-right');

              iTouch = iTouch-1;
            }
        }
        var aPagination = document.querySelectorAll('.js-testimonials-pagination li');
        aPagination[nCurrentTestimonialsBody].classList.remove('active');
        aPagination[iTouch].classList.add('active');

        nCurrentTestimonialsBody = iTouch;
    }
    /* reset values */
    xDown = null;
    yDown = null;
};

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
