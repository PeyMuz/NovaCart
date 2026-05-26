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