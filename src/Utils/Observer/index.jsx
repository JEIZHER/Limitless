const Observer=()=>{

const activeStyle = 'underline'
const menuLinks = document.querySelectorAll('.menu a[href^="#"]')
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute('id')
            const menuLink = document.querySelector(`.menu a[href^="#${id}"]`)
            menuLink.classList.remove(activeStyle)
            if (entry.isIntersecting) {
                // document.querySelector(`.menu a.${activeStyle}`).classList.remove(activeStyle)
                menuLink.classList.add(activeStyle)
            }
        })
    },
    { rootMargin: '-50%  0px -50% 0px' }
)
menuLinks.forEach((menuLink) => {
    const hash = menuLink.getAttribute('href')
    const target = document.querySelector(hash)
    if (target) {
        observer.observe(target)
    }
})
return(
    activeStyle
)

}
export default Observer
