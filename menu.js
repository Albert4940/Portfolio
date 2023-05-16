function toggleMobileMenu(){
    document.getElementById("navbar-mobile").classList.toggle("open");
    document.querySelector("body").classList.toggle("open");
    document.getElementById("menu").classList.toggle("open");
}


function addBackground(e, color){
    e.target.style.background = color;
    //console.log(e.target)
}
/* 
id = id of a tag container ex nav  
*/
function activeLink(id, color){
    const LINKS = document.querySelectorAll("#"+id +" a")
    
    LINKS.forEach(function(link){
        link.addEventListener("click", function(e){
            //remove a background from all links
            LINKS.forEach(function(link){
                link.style.background = "transparent";
            })

            addBackground(e,color)
        })
    })
    
}

 activeLink("navbar", "#45567d");