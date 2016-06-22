function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

var nCurrentTestimonialsBody = 0;
var aHeight = [];

function testimonials(){

  var testimonialsHeaderHeight = document.querySelector('.testimonials-header').clientHeight;
  var testimonialsBodyHeight = document.querySelector('.testimonials-body').clientHeight;

  var aTestimonialsBody = document.querySelectorAll('.testimonials-body');
  var nTestimonialsBody = 0;
  aHeight = [];
  
  [].forEach.call(aTestimonialsBody, function(content) {
    aHeight.push(content.clientHeight);

    if(content.clientHeight >= testimonialsBodyHeight) {
      testimonialsBodyHeight = content.clientHeight;
    }

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
  var containerTestimonialBody = document.querySelector('.testimonials-body-container');
  insertAfter(testimonialsFooter, containerTestimonialBody);

  var testimonialsFooterHeight = document.querySelector('.testimonials-footer').clientHeight + 20;
  var testimonialsTotalHeight = testimonialsBodyHeight + testimonialsHeaderHeight + testimonialsFooterHeight + 40;

  document.querySelector('.testimonials').style.height = testimonialsTotalHeight + 'px';

  var aPagination = document.querySelectorAll('.js-testimonials-pagination li');

  document.querySelector('.testimonials').addEventListener('mouseover',function(){
    clearInterval(interval);
  });
  document.querySelector('.testimonials').addEventListener('mouseout',function(){
    interval = setInterval(automaticTestimonials,4000);
  });

  for(var i = 0; i < aPagination.length; i++){
    aPagination.item(i).addEventListener('click', function(){
      clearInterval(interval);
      document.querySelector('.testimonials').addEventListener('mouseout',function(){
        clearInterval(interval);
      });
      showTestimonialsBody(this);
    }.bind(i));
  }

  showTestimonialsBody(0);

  var countAutomaticTestimonials = 0;
  function automaticTestimonials() {
    showTestimonialsBody(countAutomaticTestimonials);
    countAutomaticTestimonials = (countAutomaticTestimonials + 1) % aTestimonialsBody.length;
  };

  var interval = setInterval(automaticTestimonials,4000);
  if(document.querySelector('.testimonials').clientWidth < 769){
    document.querySelector('.testimonials').style.height = 100 + '%';
    clearInterval(interval);
    var elToMove = document.querySelector('.pull-right');
    elToMove.classList.add('text-center');
    elToMove.querySelector('span').style.display = 'block';
    elToMove.querySelector('.btn').classList.add('margin-top');

    insertAfter(elToMove, testimonialsFooter);
  }
}

function showTestimonialsBody(item){
  var aTestimonialsBody = document.querySelectorAll('.testimonials-body');
  var aPagination = document.querySelectorAll('.js-testimonials-pagination li');
  var posTestimonials = document.querySelector('.testimonials-body').clientWidth * -1;

  document.querySelector('.testimonials-body-container').style.left = (posTestimonials * item) + 'px';
  aPagination[nCurrentTestimonialsBody].classList.remove('active');
  aPagination[item].classList.add('active');
  nCurrentTestimonialsBody = item;
  if(document.querySelector('.testimonials').clientWidth < 769){
    document.querySelector('.testimonials-body-container').style.height = aHeight[item] + 'px';
    document.querySelector('.testimonials-body-container').style.alignItems = 'flex-start';
    // Code for Safari 7.0+
    document.querySelector('.testimonials-body-container').style.WebkitAlignItems = "flex-start";

    document.querySelector('.js-testimonials-pagination').style.paddingBottom = '10px';
    document.querySelector('.js-testimonials-pagination').style.marginBottom = '10px';
    document.querySelector('.js-testimonials-pagination').style.borderBottom = '1px solid #e2e5e6';

  }
}

window.addEventListener('load', testimonials);
window.addEventListener('resize', testimonials);
