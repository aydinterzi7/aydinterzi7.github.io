//Console mesajı
console.log("Merhaba, sitemize hoşgeldin!");

// Gelecek tasarımlar için mesajımız
function uyarı() {
    alert("Yakında hizmetinizde!");
}
const button = document.querySelector("#mainButton");
button.addEventListener("click", isCheck);

function isCheck() {
    const isChecked = document.querySelectorAll("#flexCheckDefault");
    isChecked.forEach(element => {
        if (element.checked === true)
            if ( element.nextElementSibling.textContent.trim()==="HAPPY") {
                console.log("happy");
            }
            else{
                console.log( element.nextElementSibling.textContent);
            }
    });
}