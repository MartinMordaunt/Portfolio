// window.addEventListener(
//     "scroll",
//     () => {
//       document.body.style.setProperty(
//         "--scroll",
//         window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
//       );
//     },
//     false
//   );
  
  
var scrollpos = window.scrollY; // window scroll position
var wh = window.innerHeight-50; // as soon as element touches bottom with offset event starts
var elementOne = document.getElementById("pOne"); //element
var elementTwo = document.getElementById("pTwo"); //element
var heading = document.getElementById("headOne");

window.addEventListener('scroll', function(){ 
    if(scrollpos > (elementOne.offsetTop - wh)){
        elementOne.classList.add("onScroll");
    }
});
window.addEventListener('scroll', function(){ 
    if(scrollpos > (elementTwo.offsetTop - wh)){
        elementTwo.classList.add("onScrollTwo");
    }
});
window.addEventListener('scroll', function(){ 
    if(scrollpos > (heading.offsetTop - wh)){
        heading.classList.add("onScrollHead");
    }
});