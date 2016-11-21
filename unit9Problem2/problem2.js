var boldText = document.getElementsByTagName("strong");

console.log(boldText.length);

for(var i = 0; i < boldText.length; i++){
    boldText[i].addEventListener("mouseover", function (event){
            event.target.style.color = "red";
    });
    boldText[i].addEventListener("mouseout", function (event){
        event.target.style.color = "";
    });
}

