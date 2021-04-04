function myFunction() {
  var x = document.getElementById("flex-container");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function uyarı()
{
    alert("yakında hizmetinizde...");
}
console.log("merhaba sitemize hoşgeldin");


function sekme1(){
    if(document.getElementById("genreButton").className == "fas fa-plus")
    {
         document.getElementById("genreButton").className = "fas fa-minus";
         /document.getElementsByClassName("hidden")[0].style.visibility = 'visible';/
    }
    else
    {
        document.getElementById("genreButton").className = "fas fa-plus";
        /document.getElementsByClassName("hidden")[0].style.visibility = 'hidden';/
    }

}
function sekme2(){
    if(document.getElementById("feelButton").className == "fas fa-plus")
    {
        document.getElementById("feelButton").className = "fas fa-minus";
    }
    else
    document.getElementById("feelButton").className = "fas fa-plus";
}
function sekme3(){
    if(document.getElementById("energyButton").className == "fas fa-plus")
        document.getElementById("energyButton").className = "fas fa-minus";
    else
        document.getElementById("energyButton").className = "fas fa-plus";
}
function sekme4(){
    if(document.getElementById("durationButton").className == "fas fa-plus")
    {
        document.getElementById("durationButton").className = "fas fa-minus";
    }
    else
    document.getElementById("durationButton").className = "fas fa-plus";;
}