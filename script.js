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
    document.getElementById("AppDrawer").style.width = "192px";
    document.getElementById("AppPage").style.marginLeft = "192px";
    document.getElementById("AppNav").style.marginLeft = "192px";
    document.getElementById("AppSearch").style.display = "none";
  }
}


// https://www.w3schools.com/howto/howto_css_fullscreen_search.asp

// function openSearch() {
//   document.getElementById("myOverlay").style.display = "block";
// };

// function closeSearch() {
//   document.getElementById("myOverlay").style.display = "none";
// };
