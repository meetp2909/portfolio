const closer = document.querySelector("#closer");

    closer.onclick = () =>{
        closer.style.display = "none";
        drawer.classList.remove("active");
        menu.style.display = "block";
    }


const drawer = document.querySelector(".drawer");

const menu = document.querySelector("#menu")
menu.onclick = () =>{
    drawer.classList.toggle("active");
    closer.style.display = "block";
    menu.style.display = "none";
}





