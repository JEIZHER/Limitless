//import { useEffect } from 'react'
//import Observer from '../../Utils/Observer'
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
	const activeStyle = 'btn-menu'
	const Location = useLocation()
	return (
		// Sidebar

		<nav className='hidden fixed top-0 h-12 w-full z-10  lg:h-full   lg:w-[200px]  bg-gray-900 sm:flex flex-row lg:flex-col justify-center items-center text-white text-bold text-[11px] '>
			{ Location.pathname ==='/'?<ul className='relative menu flex flex-row justify-center lg:flex-col gap-3 lg:gap-7 w-full  lg:ml-6'>
				<li>
					<a
						href='#intro'
						className={`btn_sidebar ${activeStyle} lg:pr-[106px]`}
					>
						WELCOME
					</a>
				</li>
				<li>
					<a href='#one' className='btn_sidebar lg:pr-[134px]'>
						NEWS
					</a>
				</li>
				<li>
					<a href='#two' className='btn_sidebar lg:pr-[116px]'>
						CRIPTOS
					</a>
				</li>
				<li>
					<a href='#three' className='btn_sidebar lg:pr-[75px]'>
						GET IN TOUCH
					</a>
				</li>
			</ul>:<ul className='relative menu flex flex-row justify-center lg:flex-col gap-3 lg:gap-7 w-full  lg:ml-6'>
				<li>
					<a
						href='/'
						className={`btn_sidebar  lg:pr-[131px]`}
					>
						HOME
					</a>
				</li>
	
				<li>
					<a  className={`btn_sidebar btn-menu3 lg:pr-[113px]`}>
						GRAFICO
					</a>
				</li>
	
			</ul>}
		</nav>
		
	)
}
export default Sidebar
