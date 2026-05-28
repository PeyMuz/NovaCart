let menuitems = document.getElementsByClassName("menu-items")[0];

function menuToggle(){
    if (menuitems.style.maxHeight === "200px") {
        menuitems.style.maxHeight = "0px";
        menuitems.style.padding = "0 30px";
    } else {
        menuitems.style.maxHeight = "200px";
        menuitems.style.padding = "10px 30px 20px";
    }
}

// ---------------------Js for product gallery---------------------

let productImg = document.getElementById("productImg");
let smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function(){
    productImg.src = smallImg[0].src;
    
}
smallImg[1].onclick = function(){
    productImg.src = smallImg[1].src;
    
}
smallImg[2].onclick = function(){
    productImg.src = smallImg[2].src;
    
}
smallImg[3].onclick = function(){
    productImg.src = smallImg[3].src;
    
}