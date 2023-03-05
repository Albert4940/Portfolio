function toggleMobileMenu(){
    document.getElementById("navbar-mobile").classList.toggle("open");
    document.querySelector("body").classList.toggle("open");
    document.getElementById("menu").classList.toggle("open");
}



/* 
id = id of a tag container ex nav  
*/
function activeLink(id){
    const HeaderLinks = document.querySelectorAll("#"+id +" a")
    console.log(HeaderLinks)
}
 activeLink("navbar");