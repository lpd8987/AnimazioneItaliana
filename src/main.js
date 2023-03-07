import "./custom-navbar.js";

let footerOpen;
let footerIcon;
let bib = document.querySelector("#bibliography");
if(bib){
    bib.style.display = "none";
}

let footer = document.querySelector("footer");
if(footer){
    footerOpen = false;
    footer.onclick = toggleFooter;
    
    footerIcon = document.querySelector("#footer-icon");
}

function toggleFooter(){
    if(footerOpen){
        footerOpen = false;
        bib.style.display = "none";
        footerIcon.className = "fas fa-angle-down";
    }
    else{
        footerOpen = true;
        bib.style.display = "block";
        footerIcon.className = "fas fa-angle-up";
    }
}

let iframes; 


function adjustVideo()
{
    for(let i of iframes)
    {
        i.width = window.innerWidth * .75;
        i.height = window.innerWidth * .325;
    }
}


window.onload = () => 
{
    iframes = document.querySelectorAll("iframe");
    if(iframes)
    {
        adjustVideo();
        window.addEventListener('resize', adjustVideo);
    }
}



