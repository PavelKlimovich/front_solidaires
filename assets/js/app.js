var bouton = document.querySelector("#soignant");
var rr = document.querySelector("#rr");
var aa = document.querySelector(".login-wrap");
var dd = document.querySelector("#aa");
function check() {
    bouton.checked = true;
    if (bouton.value = true) {
        rr.style.display = "block";
        dd.classList.remove("col-12")
        rr.classList.add("col-6")
        dd.classList.add("col-6")
        aa.style.maxWidth = "750px";
    }
    
  }
  function ChechOut() {
    rr.style.display = "none";
    aa.style.maxWidth = "450px";
    dd.classList.add("col-12")
    rr.classList.remove("col-6")
    dd.classList.remove("col-6")
  }
 

  