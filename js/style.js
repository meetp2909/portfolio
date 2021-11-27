const closer = document.querySelector("#closer");

    closer.onclick = () =>{
        closer.style.display = "none";
        drawer.classList.remove("active");
        
    }






const drawer = document.querySelector(".drawer");

document.querySelector("#menu").onclick = () =>{
    drawer.classList.toggle("active");
    closer.style.display = "block";
}





