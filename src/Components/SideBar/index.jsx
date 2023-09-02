
const Sidebar = ()=>{
   
    // const activeStyle = 'underline underline-offset-4'
    // const menuLinks = document.querySelectorAll('.menu a[href^="#"]')
    // const observer = new IntersectionObserver((entries)=>{
	// 	entries.forEach(entry=>{
	// 		const id = entry.target.getAttribute("id")
    //         const menuLink = document.querySelector(`.menu a[href^="#${id}"]`)
    //         if (entry.isIntersecting){
    //             menuLink.className.add(activeStyle)
    //             console.log(menuLink)
    //         }else{
    //             menuLink.className.remove(activeStyle)
    //          console.log(menuLink)   
    //         }
            
	// 	})
	// })
    // menuLinks.forEach(menuLink=>{
    //     // menuLink.addEventListener("click" )
    //     const hash =menuLink.getAttribute("href")
    //     const target =document.querySelector(hash)
    //     if(target){
    //         observer.observe(target)
    //     }
    
    // })

return(
    // Sidebar        
            <nav className=" hidden fixed top-0 h-12 lg:h-full  w-full lg:w-[250px] z-1000 bg-blue-900 sm:flex flex-row lg:flex-col justify-center items-center text-white text-bold text-lg ">
                <ul className="flex flex-row lg:flex-col gap-3">
                    <li><a href="#intro"className="menu">WELCOME</a></li>
                    <li><a href="#one" className="menu">WHO WE ARE</a></li>
                    <li><a href="#two"  className="menu">WHAT WE DO</a></li>
                    <li><a href="#three" className="menu">GET IN TOUCH</a></li>
                </ul>
            </nav>
)
}
export default Sidebar