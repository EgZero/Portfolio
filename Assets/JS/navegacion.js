import { navItems } from "./index.js"

export 


function seleccionar(item){
    navItems.forEach(element => {
        element.classList.remove("nav__link--selected");
    })
    item.classList.add("nav__link--selected")
} 