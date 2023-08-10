export 
  function changeSection(item){
    const sections = document.querySelectorAll("[data-section]");
    sections.forEach(section => {
        if (section.getAttribute("data-section") === item.getAttribute('data-navItem') && !section.classList.contains("active")){
            sections.forEach(section => {
                section.classList.remove("active")
            })
            section.classList.add("active")
        }
    })
    
}
