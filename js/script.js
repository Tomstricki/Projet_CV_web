var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("barre1");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 101) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width-1 + "%";
      }
    }
  }
}
var j = 0;
function move2() {
  if (j == 0) {
    j = 1;
    var elem = document.getElementById("barre2");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 80) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
var k = 0;
function move3() {
  if (k == 0) {
    k = 1;
    var elem = document.getElementById("barre3");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 50) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}

const ratio= .2
const options = {
  root : null,
  rootMargin : '0px',
  threshold: ratio
}
const handleIntersect = function (entries,observer){
  entries.forEach(function(entry){
    if(entry.intersectionRatio > ratio){
      entry.target.classList.add('reveal-visible');
      observer.unobserve(entry.target);
    }
  })
}
const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll(".reveal, .reveal-compe").forEach(function (r){
  observer.observe(r)
})

const movescroll1 = function (entries){
  entries.forEach(function(entry){
    if(entry.intersectionRatio > ratio){
      move()
    }
  })
}
const observerMove1 = new IntersectionObserver (movescroll1, options)
observerMove1.observe(document.querySelector('#barre1'))
const movescroll2 = function (entries){
  entries.forEach(function(entry){
    if(entry.intersectionRatio > ratio){
      move2()
    }
  })
}
const observerMove2 = new IntersectionObserver (movescroll2, options)
observerMove2.observe(document.querySelector('#barre2'))

const movescroll3 = function (entries){
  entries.forEach(function(entry){
    if(entry.intersectionRatio > ratio){
      move3()
    }
  })
}
const observerMove3 = new IntersectionObserver (movescroll3, options)
observerMove3.observe(document.querySelector('#barre3'))