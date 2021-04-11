//Console mesajı
console.log("Merhaba, sitemize hoşgeldin!");

// Gelecek tasarımlar için mesajımız
function uyarı()
{
    alert("Yakında hizmetinizde!");
}

// Sekmeye basılınca artı ve eksi işaretlerin oluşması
function sekme1(){
    if(document.getElementById("genreButton").className == "fas fa-plus")
         document.getElementById("genreButton").className = "fas fa-minus";
    else
        document.getElementById("genreButton").className = "fas fa-plus";
    
    document.getElementById("feelButton").className = "fas fa-plus";
    document.getElementById("energyButton").className = "fas fa-plus";
    document.getElementById("durationButton").className = "fas fa-plus";
    document.getElementById("vocalButton").className = "fas fa-plus";
    document.getElementById("contactButton").className = "fas fa-plus";
    document.getElementById("purposeButton").className = "fas fa-plus";
    
}
function sekme2(){
    if(document.getElementById("feelButton").className == "fas fa-plus")
        document.getElementById("feelButton").className = "fas fa-minus";    
    else
        document.getElementById("feelButton").className = "fas fa-plus";
    
    document.getElementById("genreButton").className = "fas fa-plus";
    document.getElementById("energyButton").className = "fas fa-plus";
    document.getElementById("durationButton").className = "fas fa-plus";
    document.getElementById("vocalButton").className = "fas fa-plus";
    document.getElementById("contactButton").className = "fas fa-plus"; 
    document.getElementById("purposeButton").className = "fas fa-plus";   
}
function sekme3(){
    if(document.getElementById("energyButton").className == "fas fa-plus")
        document.getElementById("energyButton").className = "fas fa-minus";
    else
        document.getElementById("energyButton").className = "fas fa-plus";

    document.getElementById("feelButton").className = "fas fa-plus";
    document.getElementById("genreButton").className = "fas fa-plus";
    document.getElementById("durationButton").className = "fas fa-plus";
    document.getElementById("vocalButton").className = "fas fa-plus";
    document.getElementById("contactButton").className = "fas fa-plus";
    document.getElementById("purposeButton").className = "fas fa-plus";
}
function sekme4(){
    if(document.getElementById("durationButton").className == "fas fa-plus")
        document.getElementById("durationButton").className = "fas fa-minus";       
    else
    document.getElementById("durationButton").className = "fas fa-plus";

    document.getElementById("feelButton").className = "fas fa-plus";
    document.getElementById("energyButton").className = "fas fa-plus";
    document.getElementById("genreButton").className = "fas fa-plus";
    document.getElementById("vocalButton").className = "fas fa-plus";
    document.getElementById("contactButton").className = "fas fa-plus";
    document.getElementById("purposeButton").className = "fas fa-plus";
}
function sekme5(){
    if(document.getElementById("vocalButton").className == "fas fa-plus")
        document.getElementById("vocalButton").className = "fas fa-minus";     
    else
    document.getElementById("vocalButton").className = "fas fa-plus";

    document.getElementById("feelButton").className = "fas fa-plus";
    document.getElementById("energyButton").className = "fas fa-plus";
    document.getElementById("durationButton").className = "fas fa-plus";
    document.getElementById("genreButton").className = "fas fa-plus";
    document.getElementById("contactButton").className = "fas fa-plus";
    document.getElementById("purposeButton").className = "fas fa-plus";
}
function sekme6(){
    if(document.getElementById("contactButton").className == "fas fa-plus")
        document.getElementById("contactButton").className = "fas fa-minus";     
    else
    document.getElementById("contactButton").className = "fas fa-plus";

    document.getElementById("feelButton").className = "fas fa-plus";
    document.getElementById("energyButton").className = "fas fa-plus";
    document.getElementById("durationButton").className = "fas fa-plus";
    document.getElementById("vocalButton").className = "fas fa-plus";
    document.getElementById("genreButton").className = "fas fa-plus";
    document.getElementById("purposeButton").className = "fas fa-plus";
}

function sekme7(){
    if(document.getElementById("purposeButton").className == "fas fa-plus")
        document.getElementById("purposeButton").className = "fas fa-minus";     
    else
    document.getElementById("purposeButton").className = "fas fa-plus";

    document.getElementById("feelButton").className = "fas fa-plus";
    document.getElementById("energyButton").className = "fas fa-plus";
    document.getElementById("durationButton").className = "fas fa-plus";
    document.getElementById("vocalButton").className = "fas fa-plus";
    document.getElementById("genreButton").className = "fas fa-plus";
    document.getElementById("contactButton").className = "fas fa-plus";
}

