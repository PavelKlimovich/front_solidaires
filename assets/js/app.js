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
 
  

//  // Get the modal
var modal = document.querySelector("#myModal");
var close = document.getElementById("close");
 
close.onclick = function() {
    modal.style.display = "none";
    
   
}  
 
window.onclick = function(event) {
  if (event.target == modal) {
     modal.style.display = "none";
   }
}

function modalForm() {
  var modal = document.querySelector("#myModal");
  
  modal.style.display = "block";
 
}

function modalOpen(name,firstname,about,link) {
var modal = document.querySelector("#myModal");
var close = document.querySelector("#close");
var modal = document.querySelector("#myModal");
var modalName = document.querySelector("#modalName");
var modalFirstname =document.querySelector("#modalFirstname");
var modalAbout =document.querySelector("#modalAbout");
var modalLink =document.querySelector("#modalLink");

modal.style.display = "block";
modalName.innerText =  name ;
modalFirstname.innerText = firstname ;
modalAbout.innerText =  about ;
modalLink.innerText =  link ;

}

function modalMap(type,number,addresse,about,date1, date2) {
var modal = document.querySelector("#myModal");


var modalType = document.querySelector("#modalType");
var modalNumber =document.querySelector("#modalNumber");
var modalAbout =document.querySelector("#modalAbout");
var modalAdresse =document.querySelector("#modalAdresse");
var modalDate1 =document.querySelector("#modalDate1");
var modalDate2 =document.querySelector("#modalDate2");


modal.style.display = "block";
modalType.innerText =  type ;
modalNumber.innerText = number ;
modalAdresse.innerText =  addresse ;
modalDate2.innerText =  date2 ;
modalDate1.innerText =  date1 ;
modalAbout.innerText =  about ;

}













 
  
 