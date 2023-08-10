import { seleccionar } from "./navegacion.js"
import { changeSection } from "./changeSection.js"
export
    const navItems = document.querySelectorAll("[data-navItem]")
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (!item.classList.contains("nav__link--selected")) {
            seleccionar(item);
            changeSection(item);
        }
    })
})
