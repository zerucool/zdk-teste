function docReady(fn) {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
};

docReady(function() {
  var x = window.matchMedia("(max-width: 768px)")
  changeLayout(x) 
  x.addListener(changeLayout)
  function changeLayout(x) {
    if (x.matches) { 
      document.getElementById("AppLayout").classList.add("mobile");
      document.getElementById("AppLayout").classList.remove("desktop");
    } else {
     document.getElementById("AppLayout").classList.add("desktop");
     document.getElementById("AppLayout").classList.remove("mobile");
     document.getElementById("AppDrawer").style.display = "none";
     document.getElementById("AppPage").style.marginLeft = "0";
     document.getElementById("AppNav").style.marginLeft = "0";
    }
  };
});

function toggleDrawer() {
  var x = document.getElementById("AppDrawer");
  if (x.style.display === "flex") {
    x.style.display = "none";
    document.getElementById("AppDrawer").style.width = "0";
    document.getElementById("AppPage").style.marginLeft = "0";
    document.getElementById("AppNav").style.marginLeft = "0";
  } else {
    x.style.display = "flex";
    document.getElementById("AppDrawer").style.width = "20.8rem";
    document.getElementById("AppPage").style.marginLeft = "20.8rem";
    document.getElementById("AppNav").style.marginLeft = "20.8rem";
  }
};

window.onload=function(){
  document.querySelector("#SearchOpen").addEventListener("click", function() {
    document.querySelector("#AppOverlay").style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
  });
  document.querySelector("#SearchClose").addEventListener("click", function() {
    document.querySelector("#AppOverlay").style.display = "none";
    document.querySelector("body").style.overflow = "visible";
  });
}

// https://abouolia.github.io/sticky-sidebar/
// https://codepen.io/joshuamasen/pen/OYaYbL
// const scrollToTopButton = document.getElementById('AppTop');
// const scrollFunc = () => {
//   let y = window.scrollY;
//   if (y > 0) {
//     scrollToTopButton.className = "ccs-btn-top show";
//   } else {
//     scrollToTopButton.className = "ccs-btn-top hide";
//   }
// };
// window.addEventListener("scroll", scrollFunc);
// const scrollToTop = () => {
//   const c = document.documentElement.scrollTop || document.body.scrollTop;
//   if (c > 0) {
//     window.requestAnimationFrame(scrollToTop);
//     window.scrollTo(0, c - c / 10);
//   }
// };
// scrollToTopButton.onclick = function(e) {
//   e.preventDefault();
//   scrollToTop();
// }

